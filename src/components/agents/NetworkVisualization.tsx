import { useEffect, useRef } from 'react';

export const NetworkVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with higher resolution
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Enhanced Node class with more sophisticated properties
    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      connections: Node[];
      pulsePhase: number;
      baseRadius: number;
      glowIntensity: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.baseRadius = Math.random() * 4 + 3; // Increased base size
        this.radius = this.baseRadius;
        this.connections = [];
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.glowIntensity = Math.random() * 0.5 + 0.5;
        
        // Random color selection from a curated palette
        const colors = [
          'rgba(155, 135, 245, 0.9)', // Purple
          'rgba(14, 165, 233, 0.9)',  // Blue
          'rgba(217, 70, 239, 0.9)'   // Magenta
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(time: number) {
        if (!canvas) return;
        
        // Enhanced pulsing effect
        this.radius = this.baseRadius + Math.sin(time * 0.002 + this.pulsePhase) * 1;
        this.glowIntensity = 0.5 + Math.sin(time * 0.003 + this.pulsePhase) * 0.3;
        
        // Smoother movement
        this.x += this.vx;
        this.y += this.vy;

        // Improved boundary checking with smooth transition
        const margin = 100;
        if (this.x < margin) this.vx += 0.02;
        if (this.x > canvas.width / window.devicePixelRatio - margin) this.vx -= 0.02;
        if (this.y < margin) this.vy += 0.02;
        if (this.y > canvas.height / window.devicePixelRatio - margin) this.vy -= 0.02;

        // Enhanced damping for smoother motion
        this.vx *= 0.98;
        this.vy *= 0.98;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Outer glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 4
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.4, this.color.replace('0.9', '0.3'));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core of the node with enhanced glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * this.glowIntensity})`;
        ctx.fill();
      }
    }

    // Create more nodes for a denser network
    const nodes: Node[] = [];
    const numNodes = 40; // Increased number of nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push(
        new Node(
          Math.random() * (canvas.width / window.devicePixelRatio),
          Math.random() * (canvas.height / window.devicePixelRatio)
        )
      );
    }

    // Enhanced connection establishment
    nodes.forEach(node => {
      const nearestNodes = nodes
        .filter(n => n !== node)
        .sort((a, b) => {
          const distA = Math.hypot(a.x - node.x, a.y - node.y);
          const distB = Math.hypot(b.x - node.x, b.y - node.y);
          return distA - distB;
        })
        .slice(0, 4); // Increased connections per node
      
      node.connections = nearestNodes;
    });

    // Animation loop with enhanced effects
    let time = 0;
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      // Update and draw nodes
      nodes.forEach(node => {
        node.update(time);
        node.draw(ctx);
      });

      // Draw enhanced connections with dynamic effects
      nodes.forEach(node => {
        node.connections.forEach(connectedNode => {
          const dx = connectedNode.x - node.x;
          const dy = connectedNode.y - node.y;
          const distance = Math.hypot(dx, dy);
          
          // Enhanced gradient for connection lines
          const gradient = ctx.createLinearGradient(
            node.x, node.y,
            connectedNode.x, connectedNode.y
          );
          
          const alpha = Math.max(0, 1 - distance / 300); // Increased visibility range
          const startColor = node.color.replace('0.9', `${alpha}`);
          const endColor = connectedNode.color.replace('0.9', `${alpha}`);
          
          gradient.addColorStop(0, startColor);
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${alpha * 0.3})`);
          gradient.addColorStop(1, endColor);

          // Enhanced connection line
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2; // Thicker lines
          ctx.stroke();

          // Animated particles along connections
          const numParticles = 4; // More particles
          for (let i = 0; i < numParticles; i++) {
            const t = (time * 0.0005 + i / numParticles) % 1;
            const x = node.x + dx * t;
            const y = node.y + dy * t;
            
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2); // Larger particles
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
            ctx.fill();
          }
        });
      });

      time++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }} // Increased opacity for better visibility
    />
  );
};