import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { perf } from '@/lib/perf-monitoring';

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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Initialize performance monitoring
    const cleanup = perf.init(renderer);

    // Procedural holographic particles (no texture needed)
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const holographicColors = [
      [0.9, 0.7, 1.0],  // Soft purple
      [0.6, 0.8, 1.0],  // Cool blue
      [0.8, 0.6, 1.0]   // Lavender
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const color = holographicColors[Math.floor(Math.random() * holographicColors.length)];
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Simplified material without texture dependency
    const material = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      perf.begin();
      
      animationFrameId = requestAnimationFrame(animate);
      
      const time = clock.getElapsedTime();
      
      particles.rotation.x = time * 0.05;
      particles.rotation.y = time * 0.07;

      // Gentle positional animation
      const positions = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] += Math.sin(time * 0.5 + i) * 0.01;
        positions[i3 + 1] += Math.cos(time * 0.5 + i) * 0.01;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      perf.end();
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    camera.position.z = 25;

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