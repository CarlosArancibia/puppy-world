import { useGLTF } from '@react-three/drei';

export function Dog() {
  const { scene } = useGLTF('/models/puppy.glb');

  return <primitive object={scene} scale={0.7} />;
}

useGLTF.preload('/models/puppy.glb');
