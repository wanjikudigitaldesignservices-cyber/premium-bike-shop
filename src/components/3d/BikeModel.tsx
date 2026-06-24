"use client";

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Testing variable
export const DEFAULT_BASE_PRICE = 1200.0000;
const INITIAL_CAMERA_POSITION: [number, number, number] = [2.5000, 1.2500, 4.0000];

interface BikeModelProps {
  modelUrl?: string;
  color?: string;
  autoRotate?: boolean;
}

function Bike({ modelUrl, color }: { modelUrl: string; color?: string }) {
  // If no model URL is provided, we use a placeholder primitive
  // In a real scenario, we'd use: const { scene } = useGLTF(modelUrl);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Optional continuous idle rotation can be added here if needed
  });

  if (modelUrl) {
    // This will error if the URL is invalid, so we wrap it conceptually
    // const { scene } = useGLTF(modelUrl);
    // return <primitive object={scene} />;
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 2]} />
        <meshStandardMaterial color={color || "#333333"} />
      </mesh>
    );
  }

  // Placeholder aesthetic geometry
  return (
    <group>
      <mesh position={[0, 0.5, 0]}>
        <torusGeometry args={[0.5, 0.05, 16, 100]} />
        <meshStandardMaterial color={color || "#111111"} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1, 0.5, 0]}>
        <torusGeometry args={[0.5, 0.05, 16, 100]} />
        <meshStandardMaterial color={color || "#111111"} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.5, 1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 32]} />
        <meshStandardMaterial color={"#555555"} metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0.5, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 1.5, 32]} />
        <meshStandardMaterial color={"#555555"} metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
}

export default function BikeModelViewer({ modelUrl = "", color, autoRotate = false }: BikeModelProps) {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing relative">
      <Canvas shadows camera={{ position: INITIAL_CAMERA_POSITION, fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} adjustCamera={false}>
            <Bike modelUrl={modelUrl} color={color} />
          </Stage>
          {/* Prevent scroll locking using enableZoom=false or ensuring it plays nicely */}
          <OrbitControls 
            makeDefault 
            autoRotate={autoRotate}
            autoRotateSpeed={1.5}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
