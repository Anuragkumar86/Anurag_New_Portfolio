"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function GlobalBackground() {
  const particlesRef = useRef<THREE.Points>(null);
  const gridRef = useRef<THREE.GridHelper>(null);
  
  const particleCount = 500;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 40;     // x
        pos[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
        pos[i * 3 + 2] = (Math.random() - 0.5) * 40; // z
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
        particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
        particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
    
    // Slight parallax for the grid based on mouse
    if (gridRef.current) {
        gridRef.current.position.x = (state.pointer.x * Math.PI) * 0.2;
        gridRef.current.position.z = (state.pointer.y * Math.PI) * 0.2;
    }
  });

  return (
    <group>
      {/* Floating Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
            <bufferAttribute
                attach="attributes-position"
                count={particleCount}
                array={positions}
                itemSize={3}
                args={[positions, 3]}
            />
        </bufferGeometry>
        <pointsMaterial
            size={0.05}
            color="#A78BFA"
            transparent
            opacity={0.4}
            sizeAttenuation
            blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Subtle Grid Floor */}
      <group position={[0, -5, 0]}>
        <gridHelper 
            ref={gridRef}
            args={[100, 50, "#22D3EE", "#6366F1"]} 
        />
        {/* Fading gradient for the grid so it disappears at edges */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial 
                color="#0B0F19" 
                transparent 
                opacity={0.9} 
                depthWrite={false}
            />
        </mesh>
      </group>
    </group>
  );
}
