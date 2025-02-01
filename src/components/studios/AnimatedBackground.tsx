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

    // Create dynamic particle system with increased count
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    // Define updated neon color palette
    const neonColors = [
      [0.92, 0.22, 0.30],  // Red (#ea384c)
      [0.2, 1.0, 0.8],     // Neon Cyan
      [0.8, 0.2, 1.0],     // Neon Purple
      [0.2, 0.8, 1.0],     // Neon Blue
      [0.95, 0.99, 0.89],  // Green (#F2FCE2)
    ];

    // Initialize particles with wider distribution
    for (let i = 0; i < particleCount; i++) {
      // Distribute particles in a larger space
      positions[i * 3] = (Math.random() - 0.5) * 40;     // X position (wider range)
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40; // Y position (wider range)
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40; // Z position (wider range)

      // Initialize velocities with more variation
      velocities[i * 3] = (Math.random() - 0.5) * 0.05;     // X velocity
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.05; // Y velocity
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.05; // Z velocity

      // Randomly select a neon color from the palette
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      colors[i * 3] = color[0];     // R
      colors[i * 3 + 1] = color[1]; // G
      colors[i * 3 + 2] = color[2]; // B

      sizes[i] = Math.random() * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Position camera further back to see more particles
    camera.position.z = 30;

    // Animation
    let animationFrameId: number;
    const animate = () => {
      perf.begin();
      
      animationFrameId = requestAnimationFrame(animate);
      const positions = geometry.attributes.position.array as Float32Array;
      
      // Update particle positions independently
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Update positions with velocities
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];

        // Boundary check and wrap around (instead of bounce)
        for (let j = 0; j < 3; j++) {
          if (positions[i3 + j] > 20) {
            positions[i3 + j] = -20;
          } else if (positions[i3 + j] < -20) {
            positions[i3 + j] = 20;
          }
        }

        // Add slight randomness to velocities
        velocities[i3] += (Math.random() - 0.5) * 0.001;
        velocities[i3 + 1] += (Math.random() - 0.5) * 0.001;
        velocities[i3 + 2] += (Math.random() - 0.5) * 0.001;

        // Limit maximum velocity
        for (let j = 0; j < 3; j++) {
          velocities[i3 + j] = Math.max(Math.min(velocities[i3 + j], 0.1), -0.1);
        }
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
        background: 'radial-gradient(circle at center, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.99) 75%, rgba(0,0,0,1) 100%)',
      }}
    />
  );
};