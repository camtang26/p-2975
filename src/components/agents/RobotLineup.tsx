import { useEffect, useRef } from 'react';

const ROBOTS = [
  {
    color: '#0EA5E9', // Ocean Blue
    x: 16.67,
    scale: 1.4,
    role: 'Content Creator',
    textColor: '#3B82F6' // Neon Blue
  },
  {
    color: '#F97316', // Bright Orange
    x: 33.33,
    scale: 1.3,
    role: 'Social Media Manager',
    textColor: '#FB923C' // Neon Orange
  },
  {
    color: '#10B981', // Emerald Green
    x: 50,
    scale: 1.4,
    role: 'Marketing Lead',
    textColor: '#4ADE80' // Neon Green
  },
  {
    color: '#ea384c', // Red
    x: 66.67,
    scale: 1.3,
    role: 'SEO Specialist',
    textColor: '#FB7185' // Neon Red
  },
  {
    color: '#9b87f5', // Purple
    x: 83.33,
    scale: 1.4,
    role: 'Data Analyst',
    textColor: '#A78BFA' // Neon Purple
  }
];

export const RobotLineup = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    let hoverIndex = -1;
    
    const drawRobot = (x: number, y: number, color: string, scale: number, isHovered: boolean, role: string, textColor: string) => {
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

      // Role text with neon effect
      ctx.restore();
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
        // Increased y position from 200 to 240 to move text even further down
        ctx.fillText(role, x, y + 240);
      }
      
      ctx.restore();
    };

    const render = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      ROBOTS.forEach((robot, index) => {
        const x = (canvasWidth * robot.x) / 100;
        // Position robots at 70% of canvas height
        const y = canvasHeight * 0.70;
        drawRobot(x, y, robot.color, robot.scale * 1.2, index === hoverIndex, robot.role, robot.textColor);
      });
    };

    // Handle hover effects
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = canvas.width / window.devicePixelRatio;
      
      // Calculate which robot is being hovered based on x position
      const robotWidth = width / ROBOTS.length;
      const index = Math.floor(x / robotWidth);
      hoverIndex = index >= 0 && index < ROBOTS.length ? index : -1;
      
      render();
    });

    canvas.addEventListener('mouseleave', () => {
      hoverIndex = -1;
      render();
    });

    render();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
};
