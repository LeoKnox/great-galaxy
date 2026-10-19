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
    const meshes = useMemo(() => {
      const material = new THREE.MeshStandardMaterial({
        color: "red",
        side: THREE.DoubleSide,
      });
  
      const first = new THREE.Mesh(
        new THREE.PlaneGeometry(roomWidth, roomDepth),
        material
      );
      first.position.set(-1, 0.5, -4);
      first.rotation.y = 0; // second.rotation.y = Math.PI / 2;
  
      const second = new THREE.Mesh(
        new THREE.PlaneGeometry(-roomWidth, roomDepth),
        material
      );
      second.position.set( -1, 0.5, 4);
      second.rotation.y = 0; 

      const third = new THREE.Mesh(
        new THREE.PlaneGeometry(8, roomDepth),
        material
      );
      third.position.set(5, 0.5, 0);
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
