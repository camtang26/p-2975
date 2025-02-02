import { useEffect, useRef } from 'react';
import { ROBOTS } from './types/RobotTypes';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

export const MobileRobotLineup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const robotsRef = useRef<THREE.Group[]>([]);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create robots
    ROBOTS.forEach((robotData, index) => {
      const group = new THREE.Group();
      
      // Create robot body (simplified for example)
      const geometry = new THREE.BoxGeometry(1, 2, 0.5);
      const material = new THREE.MeshPhongMaterial({ 
        color: robotData.color,
        emissive: robotData.color,
        emissiveIntensity: 0.2
      });
      const robot = new THREE.Mesh(geometry, material);
      group.add(robot);

      // Position robots in V formation
      const xOffset = (index - 2) * 1.5; // Center robot is at index 2
      const zOffset = Math.abs(index - 2) * -1; // Further robots move back
      const rotation = (index - 2) * Math.PI / 8; // Rotate outward

      group.position.set(xOffset, 0, zOffset);
      group.rotation.y = rotation;
      
      scene.add(group);
      robotsRef.current.push(group);
    });

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      requestAnimationFrame(animate);
      
      // Subtle floating animation
      robotsRef.current.forEach((robot, index) => {
        robot.position.y = Math.sin(Date.now() * 0.001 + index) * 0.1;
      });
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(rendererRef.current!.domElement);
      rendererRef.current?.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] overflow-visible perspective-1000"
      style={{ transform: 'translateY(20px)' }}
    />
  );
};