import { Node } from './Node';

export class ConnectionRenderer {
  static drawConnections(ctx: CanvasRenderingContext2D, nodes: Node[], time: number) {
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
        
        const alpha = Math.max(0, 1 - distance / 400); // Increased visibility range
        const startColor = node.color.replace('0.9', `${alpha}`);
        const endColor = connectedNode.color.replace('0.9', `${alpha}`);
        
        gradient.addColorStop(0, startColor);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${alpha * 0.4})`);
        gradient.addColorStop(1, endColor);

        // Thicker connection lines
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(connectedNode.x, connectedNode.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.stroke();

        // More particles with enhanced glow
        const numParticles = 6;
        for (let i = 0; i < numParticles; i++) {
          const t = (time * 0.0006 + i / numParticles) % 1;
          const x = node.x + dx * t;
          const y = node.y + dy * t;
          
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
          ctx.fill();
        }
      });
    });
  }
}