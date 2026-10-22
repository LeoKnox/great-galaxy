import { useMemo } from "react";
import * as THREE from "three";

export default function Stairs({
  roomInfo: {x,y, stairColor},
  color = "gray",
}) {
  const stairLoc=[{x: -3, y:-3},{x: -2, y:-2}]
  const mesh = useMemo(() => {
    const group = new THREE.Group();

    const material = new THREE.MeshStandardMaterial({ color: stairColor });
import { useMemo } from "react";
import * as THREE from "three";

export default function Stairs({
  roomInfo: {x,y, stairColor},
  color = "gray",
}) {
  const stairLoc=[{x: -3, y:-3},{x: -2, y:-2}]
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

    return group;
  }, [color]);
  let temp = <>stairLoc.map((individual) => {
<primitive object={mesh} position={[individual.x, 0, y]} rotation={[0, 0,Math.PI / 2]} />
  })</>
  return temp;
}

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

    return group;
  }, [color]);
  let temp = <>stairLoc.map((individual) = (
<primitive object={mesh} position={[x, 0, y]} rotation={[0, 0,Math.PI / 2]} />
  ))</>
  return temp;
}
