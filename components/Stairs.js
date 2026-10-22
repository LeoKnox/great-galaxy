import { useMemo } from "react";
import * as THREE from "three";

export default function Stairs({
  roomInfo: {x,y, stairColor},
  color = "gray",
}) {
  const mesh = useMemo(() => {
    const group = new THREE.Group();

    const material = new THREE.MeshStandardMaterial({ color: stairColor });

    const steps = [
      { width: 0.5, height: 1 },
      { width: .5, height: 0.5 },
    ];

    steps.forEach(({ width, height }, index) => {
      const geometry = new THREE.BoxGeometry(width, height, 1);
      const box = new THREE.Mesh(geometry, material);

      box.position.set(
        index === 0 ? -width / 2 : width / 2, 
        height / 2,                          
        0
      );

      box.castShadow = true;
      box.receiveShadow = true;
      group.add(box);
    });
//{x:-3,y:-3, chestColor:"#aaaaaa"}
    return group;
  }, [color]);

  return <primitive object={mesh} position={[x, 1, y]} rotation={[0, 0,Math.PI / 2]} />;
}
