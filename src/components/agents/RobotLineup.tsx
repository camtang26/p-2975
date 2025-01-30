import { useEffect, useRef } from 'react';

const ROBOTS = [
  {
    color: '#0EA5E9', // Ocean Blue
    x: 16.67,
    scale: 1.4
  },
  {
    color: '#F97316', // Bright Orange
    x: 33.33,
    scale: 1.3
  },
  {
    color: '#33C3F0', // Sky Blue
    x: 50,
    scale: 1.4
  },
  {
    color: '#0FA0CE', // Bright Blue (different shade)
    x: 66.67,
    scale: 1.3
  },
  {
    color: '#2563EB', // Royal Blue
    x: 83.33,
    scale: 1.4
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
    
    const drawRobot = (x: number, y: number, color: string, scale: number, isHovered: boolean) => {
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

    const render = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      ROBOTS.forEach((robot, index) => {
        // Calculate x position based on percentage of canvas width
        const x = (canvasWidth * robot.x) / 100;
        // Position robots at 80% of canvas height to ensure they're at the bottom
        const y = canvasHeight * 0.8;
        drawRobot(x, y, robot.color, robot.scale, index === hoverIndex);
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