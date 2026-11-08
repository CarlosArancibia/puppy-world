'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Dog } from './Dog';

export function DogScene() {
  return (
    <div className="h-screen w-full bg-[#f5f0e8]">
      <Canvas camera={{ position: [3, 2, 5], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3} />

        <Suspense fallback={null}>
          <Dog />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
