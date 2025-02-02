import { useEffect, useRef } from 'react';
import { ROBOTS } from './types/RobotTypes';
import * as THREE from 'three';

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
    
    // Set up camera with adjusted position for better framing
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7; // Moved back for wider view
    camera.position.y = 1; // Slight upward adjustment
    cameraRef.current = camera;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add debug helpers
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // Create robots with refined V-formation
    ROBOTS.forEach((robotData, index) => {
      const group = new THREE.Group();
      
      // Create robot body with improved geometry
      const geometry = new THREE.BoxGeometry(0.8, 1.6, 0.4);
      const material = new THREE.MeshPhongMaterial({ 
        color: robotData.color,
        emissive: robotData.color,
        emissiveIntensity: 0.3,
        shininess: 30
      });
      const robot = new THREE.Mesh(geometry, material);
      group.add(robot);

      // Enhanced V-formation positioning
      const xOffset = (index - 2) * 1.3;
      const zOffset = Math.abs(index - 2) * -1.5;
      const rotation = (index - 2) * Math.PI / 6;

      group.position.set(xOffset, 0, zOffset);
      group.rotation.y = rotation;
      
      scene.add(group);
      robotsRef.current.push(group);
    });

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(2, 2, 2);
    scene.add(directionalLight);

    // Animation loop with smoother floating effect
    const animate = () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      requestAnimationFrame(animate);
      
      // Refined floating animation
      robotsRef.current.forEach((robot, index) => {
        robot.position.y = Math.sin(Date.now() * 0.0008 + index * 0.5) * 0.15;
      });
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();

    // Enhanced resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height, false);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current?.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] overflow-visible perspective-1000"
      style={{ transform: 'translateY(40px)' }}
    />
  );
};