
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sparkles, Float } from '@react-three/drei';
import RotatingGraphic from './RotatingGraphic';

const ThreeScene = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Canvas 
        camera={{ position: [0, 2, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.3} color="#4338CA" />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3B82F6" />
        <pointLight position={[0, 15, 0]} intensity={1} color="#06B6D4" />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1.2}
          color="#F59E0B"
          castShadow
        />

        {/* Floating Animation Wrapper */}
        <Float
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={0.8}
          floatingRange={[0, 0.5]}
        >
          <RotatingGraphic />
        </Float>

        {/* Sparkles Effect */}
        <Sparkles
          count={50}
          scale={10}
          size={2}
          speed={0.4}
          opacity={0.6}
          color="#8B5CF6"
        />

        {/* Enhanced Controls */}
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          autoRotate 
          autoRotateSpeed={1.5}
          minDistance={5}
          maxDistance={15}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
        />

        {/* Environment */}
        <Environment preset="night" />
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#1a1a2e', 8, 25]} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
