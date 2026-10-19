import { useMemo } from "react";
import * as THREE from "three";

export default function Walls() {
    const wallHeight = 8;
    const wallThickness = 0.2;
    const roomWidth = 12;
    const roomDepth = 8;
 
    const meshes = useMemo(() => {
      const material = new THREE.MeshStandardMaterial({
        color: "gray",
        side: THREE.DoubleSide,
      });
  
      const first = new THREE.Mesh(
        new THREE.PlaneGeometry(roomWidth, wallHeight),
        material
      );
      first.position.set(-1, 0, -roomDepth/2);
      first.rotation.y = 0; // second.rotation.y = Math.PI / 2;
  
      const second = new THREE.Mesh(
        new THREE.PlaneGeometry(-roomWidth, wallHeight),
        material
      );
      second.position.set( -1, 0.0, roomDepth/2);
      second.rotation.y = 0; 

      const third = new THREE.Mesh(
        new THREE.PlaneGeometry(roomDepth, wallHeight),
        material
      );
      third.position.set(roomDepth/2+1, 0.0, 0);
      third.rotation.y = Math.PI / 2;
  
      return [first, second,third];
      
    }, [roomWidth, roomDepth]);
    return (<>{meshes.map((mesh, index) => (
      <primitive
        key={index}
        object={mesh}
        castShadow
        receiveShadow
      />
    ))}</>)
  }
