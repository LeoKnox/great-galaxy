import { useMemo } from "react";
import * as THREE from "three";

export default function Walls() {
    const wallHeight = 1;
    const wallThickness = 0.2;
    const roomWidth = 12;
    const roomDepth = 8;
  
    const mesh = useMemo(() => {
      const geometry = new THREE.PlaneGeometry(5, 5, );
      const material = new THREE.MeshStandardMaterial({ color: "red", side: THREE.DoubleSide });
      return new THREE.Mesh(geometry, material);
    }, []);
  
    const geometry = new THREE.BoxGeometry(3, 3, 3);
  const material = new THREE.MeshStandardMaterial("red");
  const wall = new THREE.Mesh(geometry, material);

  wall.position.set([2,2,2]);
<primitive object={wall} />;
  }
