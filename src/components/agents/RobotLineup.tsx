import { useEffect, useRef } from 'react';
import { ROBOTS } from './types/RobotTypes';
import { drawRobot } from './utils/robotDrawing';
import { useIsMobile } from '@/hooks/use-mobile';
import { MobileRobotLineup } from './MobileRobotLineup';

export const RobotLineup = () => {
  const isMobile = useIsMobile();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isMobile) return;
    
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
      
      // Adjust robot scale based on resolution
      const getAdjustedScale = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        if (width === 2560 && height === 1440) return 1.2;
        if (width === 1920 && height === 1080) return 1.0;
        if (width === 1366 && height === 768) return 0.9;
        return 1.0;
      };

      // Adjust vertical position based on resolution
      const getAdjustedY = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        if (width === 2560 && height === 1440) return 0.70;
        if (width === 1920 && height === 1080) return 0.55;
        if (width === 1366 && height === 768) return 0.50;
        return 0.60;
      };
      
      ROBOTS.forEach((robot, index) => {
        const x = (canvasWidth * robot.x) / 100;
        const y = canvasHeight * getAdjustedY();
        const scale = isMobile ? robot.scale * 0.8 : robot.scale * getAdjustedScale();
        
        drawRobot(
          ctx,
          x,
          y,
          robot.color,
          scale,
          index === hoverIndex,
          robot.role,
          robot.textColor,
          isMobile
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
  }, [isMobile]);

  if (isMobile) {
    return <MobileRobotLineup />;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
};