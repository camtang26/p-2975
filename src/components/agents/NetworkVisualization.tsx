import { useEffect, useRef } from 'react';

export const NetworkVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Node class with enhanced properties
    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      connections: Node[];
      pulsePhase: number;
      baseRadius: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.baseRadius = Math.random() * 2 + 2;
        this.radius = this.baseRadius;
        this.connections = [];
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update(time: number) {
        if (!canvas) return;
        
        // Pulsing effect
        this.radius = this.baseRadius + Math.sin(time * 0.003 + this.pulsePhase) * 0.5;
        
        // Movement
        this.x += this.vx;
        this.y += this.vy;

        // Boundary checking with smooth transition
        const margin = 50;
        if (this.x < margin) this.vx += 0.02;
        if (this.x > canvas.width / window.devicePixelRatio - margin) this.vx -= 0.02;
        if (this.y < margin) this.vy += 0.02;
        if (this.y > canvas.height / window.devicePixelRatio - margin) this.vy -= 0.02;

        // Damping
        this.vx *= 0.99;
        this.vy *= 0.99;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw node with gradient
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 2
        );
        gradient.addColorStop(0, 'rgba(140, 140, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(100, 100, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(70, 70, 255, 0)');

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core of the node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    const numNodes = 30;
    for (let i = 0; i < numNodes; i++) {
      nodes.push(
        new Node(
          Math.random() * (canvas.width / window.devicePixelRatio),
          Math.random() * (canvas.height / window.devicePixelRatio)
        )
      );
    }

    // Establish initial connections
    nodes.forEach(node => {
      const nearestNodes = nodes
        .filter(n => n !== node)
        .sort((a, b) => {
          const distA = Math.hypot(a.x - node.x, a.y - node.y);
          const distB = Math.hypot(b.x - node.x, b.y - node.y);
          return distA - distB;
        })
        .slice(0, 3);
      
      node.connections = nearestNodes;
    });

    // Animation loop
    let time = 0;
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      // Update and draw nodes
      nodes.forEach(node => {
        node.update(time);
        node.draw(ctx);
      });

      // Draw connections with enhanced effects
      nodes.forEach(node => {
        node.connections.forEach(connectedNode => {
          const dx = connectedNode.x - node.x;
          const dy = connectedNode.y - node.y;
          const distance = Math.hypot(dx, dy);
          
          // Create gradient for connection lines
          const gradient = ctx.createLinearGradient(
            node.x, node.y,
            connectedNode.x, connectedNode.y
          );
          
          const alpha = Math.max(0, 1 - distance / 200);
          gradient.addColorStop(0, `rgba(100, 100, 255, ${alpha})`);
          gradient.addColorStop(0.5, `rgba(150, 150, 255, ${alpha * 0.5})`);
          gradient.addColorStop(1, `rgba(100, 100, 255, ${alpha})`);

          // Draw connection line
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw moving particles along the connection
          const numParticles = 3;
          for (let i = 0; i < numParticles; i++) {
            const t = (time * 0.001 + i / numParticles) % 1;
            const x = node.x + dx * t;
            const y = node.y + dy * t;
            
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
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
      style={{ opacity: 0.6 }}
    />
  );
};