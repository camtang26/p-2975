import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { perf } from '@/lib/perf-monitoring';

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup with improved settings
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Initialize performance monitoring
    const cleanup = perf.init(renderer);

    // Increased particle count and improved distribution
    const particleCount = 300; // Increased from 100
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Define updated holographic color palette
    const holographicColors = [
      [0.9, 0.7, 1.0],  // Soft purple
      [0.6, 0.8, 1.0],  // Cool blue
      [0.8, 0.6, 1.0],  // Lavender
      [0.7, 0.9, 1.0]   // Added light blue for variety
    ];

    // Create particles in a more circular distribution
    for (let i = 0; i < particleCount; i++) {
      // Generate points in a spherical distribution
      const radius = 15 * Math.cbrt(Math.random()); // Using cube root for better distribution
      const theta = Math.random() * Math.PI * 2; // Angle around Y axis
      const phi = Math.acos((Math.random() * 2) - 1); // Angle from Y axis
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Randomly select a color from the palette
      const color = holographicColors[Math.floor(Math.random() * holographicColors.length)];
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Enhanced material settings for better visibility
    const material = new THREE.PointsMaterial({
      size: 2.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation with improved movement
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      perf.begin();
      
      animationFrameId = requestAnimationFrame(animate);
      
      const time = clock.getElapsedTime();
      
      // Slower rotation for more graceful movement
      particles.rotation.x = time * 0.03;
      particles.rotation.y = time * 0.05;

      // More subtle positional animation
      const positions = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] += Math.sin(time * 0.3 + i * 0.1) * 0.02;
        positions[i3 + 1] += Math.cos(time * 0.3 + i * 0.1) * 0.02;
        positions[i3 + 2] += Math.sin(time * 0.3 + i * 0.05) * 0.02;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      perf.end();
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
    camera.position.z = 30; // Adjusted camera position for better view

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      scene.clear();
      renderer.dispose();
      cleanup?.();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0"
      style={{
        background: 'radial-gradient(circle at center, rgba(0,0,0,0.98) 0%, rgba(15,15,25,0.99) 100%)',
      }}
    />
  );
};