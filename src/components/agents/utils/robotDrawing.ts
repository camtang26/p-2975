import { Robot } from "../types/RobotTypes";

export const drawRobot = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  scale: number,
  isHovered: boolean,
  role: string,
  textColor: string
) => {
  drawRobotBody(ctx, x, y, color, scale, isHovered);
  drawRobotText(ctx, x, y, role, textColor);
};

const drawRobotBody = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  scale: number,
  isHovered: boolean
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  
  // Glow effect
  ctx.shadowBlur = isHovered ? 30 : 20;
  ctx.shadowColor = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  
  // Head
  ctx.beginPath();
  ctx.roundRect(-25, -60, 50, 60, 10);
  ctx.stroke();
  
  // Eyes
  ctx.beginPath();
  ctx.arc(-10, -40, 5, 0, Math.PI * 2);
  ctx.arc(10, -40, 5, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  
  // Body
  ctx.beginPath();
  ctx.roundRect(-30, 0, 60, 80, 5);
  ctx.stroke();
  
  // Arms
  ctx.beginPath();
  ctx.moveTo(-30, 20);
  ctx.lineTo(-50, 50);
  ctx.moveTo(30, 20);
  ctx.lineTo(50, 50);
  ctx.stroke();
  
  // Legs
  ctx.beginPath();
  ctx.moveTo(-20, 80);
  ctx.lineTo(-20, 120);
  ctx.moveTo(20, 80);
  ctx.lineTo(20, 120);
  ctx.stroke();

  ctx.restore();
};

const drawRobotText = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  role: string,
  textColor: string
) => {
  ctx.save();
  
  // Text settings
  ctx.font = '18px Inter';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  
  // Multiple shadow layers for neon effect
  ctx.shadowBlur = 10;
  ctx.shadowColor = textColor;
  ctx.fillStyle = textColor;
  
  // Draw text multiple times for stronger glow
  for (let i = 0; i < 3; i++) {
    ctx.shadowBlur = (i + 1) * 5;
    ctx.fillText(role, x, y + 240);
  }
  
  ctx.restore();
};