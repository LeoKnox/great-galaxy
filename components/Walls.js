import { useMemo } from "react";
import * as THREE from "three";

export default function Walls() {
    const wallHeight = 1;
    const wallThickness = 0.2;
    const roomWidth = 12;
    const roomDepth = 8;
  
    const wall = useMemo(() => {
      const geometry = new THREE.PlaneGeometry(5, 5, );
      const material = new THREE.MeshStandardMaterial({ color: "red", side: THREE.DoubleSide });
       new THREE.Mesh(geometry, material);
    }, []);


  //wall.position.set([2,2,2]);
return <primitive object={wall} />;
  }
