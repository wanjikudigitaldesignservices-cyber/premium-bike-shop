"use client";

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Testing variable
const INITIAL_CAMERA_POSITION: [number, number, number] = [2.5000, 1.2500, 4.0000];

interface BikeModelProps {
  modelUrl?: string;
  color?: string;
  autoRotate?: boolean;
}

function Bike({ modelUrl, color }: { modelUrl: string; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Refs for animation
  const groupRef = useRef<THREE.Group>(null);
  const w1Ref = useRef<THREE.Mesh>(null);
  const w2Ref = useRef<THREE.Mesh>(null);
  const f1Ref = useRef<THREE.Mesh>(null);
  const f2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Animate parts assembling over the first 3 seconds
    const t = Math.min(state.clock.elapsedTime / 3, 1);
    // Ease out expo
    const ease = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    
    if (w1Ref.current) {
      w1Ref.current.position.lerpVectors(new THREE.Vector3(-5, 0.5, 5), new THREE.Vector3(0, 0.5, 0), ease);
      w1Ref.current.rotation.x = THREE.MathUtils.lerp(Math.PI * 4, 0, ease);
    }
    if (w2Ref.current) {
      w2Ref.current.position.lerpVectors(new THREE.Vector3(5, 0.5, -5), new THREE.Vector3(1, 0.5, 0), ease);
      w2Ref.current.rotation.x = THREE.MathUtils.lerp(-Math.PI * 4, 0, ease);
    }
    if (f1Ref.current) {
      f1Ref.current.position.lerpVectors(new THREE.Vector3(0.5, 5, 0), new THREE.Vector3(0.5, 1, 0), ease);
    }
    if (f2Ref.current) {
      f2Ref.current.position.lerpVectors(new THREE.Vector3(0.5, -5, 0), new THREE.Vector3(0.5, 1, 0), ease);
    }
    
    // Add a gentle hover effect after assembly
    if (groupRef.current && t >= 1) {
      groupRef.current.position.y = Math.sin((state.clock.elapsedTime - 3) * 2) * 0.05;
    }
  });

  if (modelUrl) {
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 2]} />
        <meshStandardMaterial color={color || "#333333"} />
      </mesh>
    );
  }

  // Placeholder aesthetic geometry forming a bike
  return (
    <group ref={groupRef}>
      <mesh ref={w1Ref} position={[-5, 0.5, 5]}>
        <torusGeometry args={[0.5, 0.05, 16, 100]} />
        <meshStandardMaterial color={color || "#111111"} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh ref={w2Ref} position={[5, 0.5, -5]}>
        <torusGeometry args={[0.5, 0.05, 16, 100]} />
        <meshStandardMaterial color={color || "#111111"} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh ref={f1Ref} position={[0.5, 5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 32]} />
        <meshStandardMaterial color={"#555555"} metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh ref={f2Ref} position={[0.5, -5, 0]} rotation={[0, 0, Math.PI / 2]}>
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
