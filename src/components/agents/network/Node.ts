export class Node {
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
    this.vx = (Math.random() - 0.5) * 0.5; // Increased movement speed
    this.vy = (Math.random() - 0.5) * 0.5;
    this.baseRadius = Math.random() * 8 + 6; // Significantly larger nodes
    this.radius = this.baseRadius;
    this.connections = [];
    this.pulsePhase = Math.random() * Math.PI * 2;
    this.glowIntensity = Math.random() * 0.5 + 0.5;
    
    // Enhanced neon color palette
    const colors = [
      'rgba(139, 92, 246, 0.9)',  // Vivid Purple
      'rgba(217, 70, 239, 0.9)',  // Magenta Pink
      'rgba(14, 165, 233, 0.9)',  // Ocean Blue
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update(time: number, canvasWidth: number, canvasHeight: number) {
    // Enhanced pulsing effect
    this.radius = this.baseRadius + Math.sin(time * 0.003 + this.pulsePhase) * 2;
    this.glowIntensity = 0.7 + Math.sin(time * 0.004 + this.pulsePhase) * 0.3;
    
    // Smoother movement with increased range
    this.x += this.vx;
    this.y += this.vy;

    // Improved boundary checking for full hero section coverage
    const margin = 50;
    if (this.x < margin) this.vx += 0.02;
    if (this.x > canvasWidth - margin) this.vx -= 0.02;
    if (this.y < margin) this.vy += 0.02;
    if (this.y > canvasHeight - margin) this.vy -= 0.02;

    // Enhanced damping for smoother motion
    this.vx *= 0.99;
    this.vy *= 0.99;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Enhanced outer glow effect
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.radius * 6
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(0.4, this.color.replace('0.9', '0.4'));
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 6, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Enhanced core with stronger glow
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * this.glowIntensity})`;
    ctx.fill();
  }
}