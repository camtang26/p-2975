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

    // Create dynamic particle system with neon trails
    const particleCount = window.innerWidth < 768 ? 500 : 1000; // Responsive particle count
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const trails = new Float32Array(particleCount); // Trail length for each particle

    // Define neon color palette
    const neonColors = [
      [0.0, 0.8, 1.0],   // Neon Blue (#00ccff)
      [0.0, 1.0, 0.5],   // Neon Green (#00ff80)
      [1.0, 0.2, 0.4],   // Neon Red/Pink (#ff3366)
      [0.8, 0.2, 1.0],   // Neon Purple (#cc33ff)
    ];

    for (let i = 0; i < particleCount; i++) {
      // Distribute particles in a sphere
      const radius = Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Randomly select a neon color
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];

      // Randomize particle sizes for depth effect
      sizes[i] = Math.random() * 2 + 1;
      
      // Randomize trail lengths
      trails[i] = Math.random() * 0.5 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom shader material for neon trails
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          vec3 glow = vColor * (1.0 - dist * 2.0);
          gl_FragColor = vec4(glow, 1.0 - dist * 2.0);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Position camera
    camera.position.z = 30;

    // Animation
    let animationFrameId: number;
    const animate = () => {
      perf.begin();
      
      animationFrameId = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.0001;
      
      // Update particle positions for flowing motion
      const positions = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Create flowing motion
        positions[i3] += Math.sin(time + positions[i3 + 1] * 0.1) * 0.1;
        positions[i3 + 1] += Math.cos(time + positions[i3] * 0.1) * 0.1;
        positions[i3 + 2] += Math.sin(time + positions[i3] * 0.1) * 0.1;

        // Keep particles within bounds
        const radius = 15;
        const distance = Math.sqrt(
          positions[i3] * positions[i3] + 
          positions[i3 + 1] * positions[i3 + 1] + 
          positions[i3 + 2] * positions[i3 + 2]
        );
        
        if (distance > radius) {
          positions[i3] *= radius / distance;
          positions[i3 + 1] *= radius / distance;
          positions[i3 + 2] *= radius / distance;
        }
      }
      
      geometry.attributes.position.needsUpdate = true;
      
      // Rotate the entire particle system
      particles.rotation.y = time * 0.2;
      particles.rotation.x = time * 0.1;

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
