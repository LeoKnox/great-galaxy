import { useMemo } from "react";
import * as THREE from "three";

export default function Walls() {
    const wallHeight = 1;
    const wallThickness = 0.2;
    const roomWidth = 12;
    const roomDepth = 8;
  
    const mesh = useMemo(() => {
      const geometry = new THREE.PlaneGeometry(1, 1, );
      const material = new THREE.MeshStandardMaterial({ color: "red" });
      return new THREE.Mesh(geometry, material);
    }, []);
  
    return <primitive object={mesh} position={[x, 0.5, y]} />;
  }
