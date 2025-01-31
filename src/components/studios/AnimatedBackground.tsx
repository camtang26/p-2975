import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance optimization
    containerRef.current.appendChild(renderer.domElement);

    // Create flowing lines
    const lines: THREE.Line[] = [];
    const numLines = 30; // Reduced for better performance
    
    for (let i = 0; i < numLines; i++) {
      const points = [];
      const numPoints = 50; // Reduced for better performance
      
      for (let j = 0; j < numPoints; j++) {
        points.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15
          )
        );
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(0.2 + Math.random() * 0.3, 0.2 + Math.random() * 0.3, 0.8 + Math.random() * 0.2),
        transparent: true,
        opacity: 0.3,
      });

      const line = new THREE.Line(geometry, material);
      lines.push(line);
      scene.add(line);
    }

    // Position camera
    camera.position.z = 8;

    // Animation
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      lines.forEach((line, i) => {
        const time = Date.now() * 0.0005; // Slowed down animation
        const points = line.geometry.attributes.position.array as Float32Array;
        
        for (let j = 0; j < points.length; j += 3) {
          points[j] += Math.sin(time + i * 0.1) * 0.001;
          points[j + 1] += Math.cos(time + i * 0.1) * 0.001;
          points[j + 2] += Math.sin(time + i * 0.05) * 0.001; // Added Z-axis movement
        }
        
        line.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      lines.forEach(line => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10"
      style={{
        background: 'radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 75%, rgba(13,13,29,0.99) 100%)',
      }}
    />
  );
};