/* eslint-disable react/no-unknown-property */
import React from "react";
import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function RotatingMars() {
  const marsRef = useRef<THREE.Mesh>(null!);
  const colorMap = useLoader(THREE.TextureLoader, "/images/2k_mars.jpg");

  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;

  const axis = new THREE.Vector3(
    Math.sin(THREE.MathUtils.degToRad(25.2)),
    Math.cos(THREE.MathUtils.degToRad(25.2)),
    0,
  );

  useFrame(() => {
    if (marsRef.current) {
      marsRef.current.rotateOnAxis(axis, 0.001);
    }
  });

  return (
    <mesh ref={marsRef} castShadow>
      <sphereGeometry args={[3, 128, 128]} />
      <meshStandardMaterial
        map={colorMap}
        displacementScale={0.1}
        roughness={0.7}
        metalness={0.4}
        emissive={new THREE.Color(0x080808)}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function RenderMars() {
  return (
    <Canvas
      className="mars"
      shadows
      style={{ height: "70vh", width: "70vw" }}
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <ambientLight intensity={0.3} color={"#ff7043"} />
      <directionalLight position={[10, 10, 10]} intensity={1.2} castShadow />
      <spotLight
        position={[-10, -10, 5]}
        intensity={0.3}
        angle={Math.PI / 6}
        castShadow
      />
      <RotatingMars />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}

export default RenderMars;
