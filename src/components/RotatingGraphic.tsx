
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

const RotatingGraphic = () => {
  const groupRef = useRef<Group>(null);
  const torusRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.3;
      groupRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.8;
      torusRef.current.rotation.z = Math.sin(time) * 0.5;
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y = -time * 0.6;
      sphereRef.current.position.y = Math.sin(time * 2) * 0.3;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 1.2;
      ringRef.current.rotation.x = Math.cos(time * 0.7) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Torus */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.4, 24, 64]} />
        <meshStandardMaterial
          color="#8B5CF6"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.85}
          emissive="#4C1D95"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Central Sphere */}
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#3B82F6"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
          emissive="#1E40AF"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Outer Ring */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[3.2, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#06B6D4"
          metalness={1.0}
          roughness={0.0}
          transparent
          opacity={0.7}
          emissive="#0891B2"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Floating Particles */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 4;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 0.5) * 0.5,
              Math.sin(angle) * radius
            ]}
          >
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#F59E0B"
              metalness={0.7}
              roughness={0.3}
              emissive="#D97706"
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}

      {/* Inner Rotating Elements */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 1.2;
        return (
          <mesh
            key={`inner-${i}`}
            position={[
              Math.cos(angle + Date.now() * 0.001) * radius,
              0,
              Math.sin(angle + Date.now() * 0.001) * radius
            ]}
          >
            <boxGeometry args={[0.15, 0.15, 0.15]} />
            <meshStandardMaterial
              color="#EC4899"
              metalness={0.8}
              roughness={0.2}
              emissive="#BE185D"
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default RotatingGraphic;
