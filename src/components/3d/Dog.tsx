import { useEffect, useRef } from 'react';
import { MathUtils, type AnimationAction, type Group } from 'three';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const DOG_ANIMATIONS = [
  'Idle',
  'Idle_2',
  'Idle_2_HeadLow',
  'Walk',
  'Gallop',
  'Gallop_Jump',
  'Jump_ToIdle',
  'Eating',
  'Idle_HitReact_Left',
  'Idle_HitReact_Right',
  'Attack',
  'Death',
] as const;

export type DogAnimation = (typeof DOG_ANIMATIONS)[number];

interface DogProps {
  animation: DogAnimation;
  isMoving?: boolean;
  direction?: 'forward' | 'backward' | null;
}

export function Dog({ animation, isMoving, direction }: DogProps) {
  const { scene, animations } = useGLTF('/models/puppy.glb');
  const { actions } = useAnimations(animations, scene);

  const groupRef = useRef<Group>(null);

  const previousAction = useRef<AnimationAction | null>(null);

  useEffect(() => {
    const nextAction = actions[animation]

    if (!nextAction) return

    const previous = previousAction.current;

    if (previous === nextAction) return;

    nextAction.reset().play();

    if (previous) {
      previous.crossFadeTo(nextAction, 0.35, false);
    }

    previousAction.current = nextAction;
  }, [animation, actions])

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    let targetRotation = 0;

    if (isMoving) {
      targetRotation =
        direction === 'backward'
          ? -Math.PI / 2
          : Math.PI / 2;
    }

    groupRef.current.rotation.y = MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotation,
      5,
      delta,
    );
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1} />
    </group>
  );
}

useGLTF.preload('/models/puppy.glb');
