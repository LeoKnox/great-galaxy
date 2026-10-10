import { useMemo } from "react";
import * as THREE from "three";

export default function Chest() {
  const mesh = useMemo(() => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: "orange" });
    return new THREE.Mesh(geometry, material);
  }, []);

  return <primitive object={mesh} position={[0, 0.5, 0]} />;
}
