"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode } from "react";
import { Environment } from "@react-three/drei";

interface SceneContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SceneContainer({ children, className }: SceneContainerProps) {
  return (
    <div className={`w-full h-full absolute inset-0 z-0 pointer-events-none ${className || ""}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#6366F1" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#22D3EE" />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
