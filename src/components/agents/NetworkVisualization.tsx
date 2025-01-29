import { useEffect, useRef } from 'react';
import { Node } from './network/Node';
import { ConnectionRenderer } from './network/ConnectionRenderer';
import { NetworkManager } from './network/NetworkManager';

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

    // Create network with more nodes
    const nodes = NetworkManager.createNetwork(
      canvas.width / window.devicePixelRatio,
      canvas.height / window.devicePixelRatio,
      50 // Increased number of nodes
    );

    // Animation loop with enhanced effects
    let time = 0;
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      // Update and draw nodes with reduced opacity
      nodes.forEach(node => {
        node.update(time, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
        ctx.globalAlpha = 0.7; // Reduced opacity for better text visibility
        node.draw(ctx);
        ctx.globalAlpha = 1.0;
      });

      // Draw enhanced connections with reduced opacity
      ctx.globalAlpha = 0.7;
      ConnectionRenderer.drawConnections(ctx, nodes, time);
      ctx.globalAlpha = 1.0;

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
      style={{ opacity: 0.8 }} // Slightly reduced base opacity
    />
  );
};