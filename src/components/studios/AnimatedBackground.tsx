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

    // Create holographic orbs with updated colors
    const particleCount = 50; // Reduced count for better performance
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Define holographic color palette
    const holographicColors = [
      [0.608, 0.529, 0.961],  // Primary Purple: #9b87f5
      [0.494, 0.412, 0.671],  // Secondary Purple: #7E69AB
      [0.431, 0.349, 0.647],  // Tertiary Purple: #6E59A5
      [0.839, 0.737, 0.980],  // Light Purple: #D6BCFA
      [0.847, 0.275, 0.937],  // Magenta Pink: #D946EF
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      // Randomly select a holographic color
      const color = holographicColors[Math.floor(Math.random() * holographicColors.length)];
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];

      // Larger sizes for orbs
      sizes[i] = Math.random() * 5 + 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Create custom shader material for holographic effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pointTexture: { value: new THREE.TextureLoader().load('/lovable-uploads/orb-texture.png') }
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        uniform float time;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = size * (300.0 / -mvPosition.z) * (1.0 + 0.3 * sin(time + position.x + position.y));
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        uniform sampler2D pointTexture;
        void main() {
          vec4 texColor = texture2D(pointTexture, gl_PointCoord);
          gl_FragColor = vec4(vColor, 1.0) * texColor;
          gl_FragColor.a *= 0.8;
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true
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
      material.uniforms.time.value = time;
      
      particles.rotation.x = time * 0.1;
      particles.rotation.y = time * 0.15;

      const positions = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + positions[i3] * 0.5) * 0.005;
        positions[i3] += Math.cos(time + positions[i3 + 1] * 0.5) * 0.005;
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

    // Position camera
    camera.position.z = 30;

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