import { Robot } from "../types/RobotTypes";

export const drawRobot = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  scale: number,
  isHovered: boolean,
  role: string,
  textColor: string,
  isMobile: boolean = false
) => {
  const viewportWidth = window.innerWidth;
  let responsiveScale = scale;
  
  if (!isMobile) {
    const minVW = 1280;
    const maxVW = 2560;
    const factor = (viewportWidth - minVW) / (maxVW - minVW);
    const scaleMultiplier = 1 + Math.min(Math.max(factor, 0), 1) * 0.2;
    responsiveScale = scale * scaleMultiplier;
  }

  drawRobotBody(ctx, x, y, color, responsiveScale, isHovered);
  drawRobotText(ctx, x, y, role, textColor, isMobile, responsiveScale);
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
  textColor: string,
  isMobile: boolean = false,
  scale: number = 1
) => {
  ctx.save();
  
  const fontSize = isMobile ? 14 : Math.round(20 * scale);
  ctx.font = `${fontSize}px Geist`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  
  ctx.shadowBlur = 10;
  ctx.shadowColor = textColor;
  ctx.fillStyle = textColor;
  
  const textY = isMobile ? y + 180 : y + (180 * scale);
  
  for (let i = 0; i < 3; i++) {
    ctx.shadowBlur = (i + 1) * 5;
    ctx.fillText(role, x, textY);
  }
  
  ctx.restore();
};
