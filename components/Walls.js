import { useMemo } from "react";
import * as THREE from "three";

export default function Walls() {
    const wallHeight = 1;
    const wallThickness = 0.2;
    const roomWidth = 12;
    const roomDepth = 8;
  
    const mesh = useMemo(() => {
      const geometry = new THREE.PlaneGeometry(roomWidth, roomDepth);
      const material = new THREE.MeshStandardMaterial({ color: "red", side: THREE.DoubleSide });
      return new THREE.Mesh(geometry, material);
    }, []);
  
    return <primitive object={mesh} position={[-1, 0.5, -4]} rotation={[0, 0, 0] }  castShadow receiveShadow />;
  }
