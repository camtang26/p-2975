import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create flowing lines
    const lines: THREE.Line[] = [];
    const numLines = 50;
    
    for (let i = 0; i < numLines; i++) {
      const points = [];
      const numPoints = 100;
      
      for (let j = 0; j < numPoints; j++) {
        points.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          )
        );
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(0.5 + Math.random() * 0.5, 0.5 + Math.random() * 0.5, 1),
        transparent: true,
        opacity: 0.5,
      });

      const line = new THREE.Line(geometry, material);
      lines.push(line);
      scene.add(line);
    }

    // Position camera
    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      lines.forEach((line, i) => {
        const time = Date.now() * 0.001;
        const points = line.geometry.attributes.position.array as Float32Array;
        
        for (let j = 0; j < points.length; j += 3) {
          points[j] += Math.sin(time + i * 0.1) * 0.002;
          points[j + 1] += Math.cos(time + i * 0.1) * 0.002;
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
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10"
      style={{
        background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
      }}
    />
  );
};