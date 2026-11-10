'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Dog, type DogAnimation } from './Dog';

interface DogSceneProps {
  animation?: DogAnimation;
  isMoving?: boolean,
  direction?: 'forward' | 'backward' | null;
}

export function DogScene({ animation = 'Idle', isMoving = false, direction = null }: DogSceneProps) {
  return (
    <div className="h-screen w-full mt-30">
      <Canvas camera={{ position: [0, 4, 7], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3} />

        <Suspense fallback={null}>
          <Dog animation={animation} isMoving={isMoving} direction={direction} />
        </Suspense>

        {/* <OrbitControls target={[0, 1, 0]} /> */}
      </Canvas>
    </div>
  );
}
