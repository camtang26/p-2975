import { useEffect, useRef } from 'react';
import { ROBOTS } from './types/RobotTypes';
import { drawRobot } from './utils/robotDrawing';

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
    
    const render = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      ROBOTS.forEach((robot, index) => {
        const x = (canvasWidth * robot.x) / 100;
        const y = canvasHeight * 0.70;
        drawRobot(
          ctx,
          x,
          y,
          robot.color,
          robot.scale * 1.2,
          index === hoverIndex,
          robot.role,
          robot.textColor
        );
      });
    };

    // Handle hover effects
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = canvas.width / window.devicePixelRatio;
      
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