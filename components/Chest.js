import { useMemo } from "react";
import * as THREE from "three";

export default function Chest({chestObject: {x,y,chestColor,treasure}}) {
  const mesh = useMemo(() => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: chestColor });
    return new THREE.Mesh(geometry, material);
  }, []);

  return <primitive object={mesh} position={[x, 0.5, y]} />;
}
