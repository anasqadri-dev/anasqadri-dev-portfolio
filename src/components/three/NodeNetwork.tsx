"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 46;
const CONNECT_DISTANCE = 2.6;

function generateNodes(count: number) {
  const positions: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    positions.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 5.5,
        (Math.random() - 0.5) * 4
      )
    );
  }
  return positions;
}

function Network() {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useMemo(() => generateNodes(NODE_COUNT), []);

  const { linePositions, pointPositions } = useMemo(() => {
    const points: number[] = [];
    nodes.forEach((n) => points.push(n.x, n.y, n.z));

    const lines: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < CONNECT_DISTANCE) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    return {
      linePositions: new Float32Array(lines),
      pointPositions: new Float32Array(points),
    };
  }, [nodes]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.02;
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#2563EB" transparent opacity={0.18} />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute
          attach="attributes-position"
          args={[pointPositions, 3]}
        />
        </bufferGeometry>
        <pointsMaterial color="#3B82F6" size={0.045} transparent opacity={0.85} sizeAttenuation />
      </points>
    </group>
  );
}

export default function NodeNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Network />
    </Canvas>
  );
}
