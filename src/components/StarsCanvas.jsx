import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
