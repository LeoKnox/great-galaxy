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
        new THREE.PlaneGeometry(roomWidth, 1),
        material
      );
      first.position.set(-1, 0.5, -4);
      first.rotation.y = 0; // faces along the Z direction
  
      const second = new THREE.Mesh(
        new THREE.PlaneGeometry(roomDepth, 1),
        material
      );
      second.position.set(-1 - roomWidth / 2, 0.5, 0);
      second.rotation.y = Math.PI / 2; // perpendicular to the first
  
      return [first, second];
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
