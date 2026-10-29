import { useMemo } from "react";
import * as THREE from "three";

export default function Stairs({
  starLoc,
  roomInfo: {x,y, stairColor},
  color = "gray",
}) {
  //const stairLoc=[{x: -3.5, y:-2.5},{x: -1.5, y:-.5}]
  const colors=["#bbbbbb", "#777777"]
  const mesh = useMemo(() => {
    const group = new THREE.Group();

    const steps = [
      { width: 0.5, height: 1 },
      { width: .5, height: 0.5 },
    ];

    steps.forEach(({ width, height }, index) => {
      const geometry = new THREE.BoxGeometry(width, height, 1);
      const material = new THREE.MeshStandardMaterial({ color: colors[index] });
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
  const stairs = useMemo(
    () => stairLoc.map(() => mesh.clone(true)),
    [mesh]
  );
  
  return( 
    <>
    {stairLoc.map((individual, index) => (
      <primitive
        key={index}
        object={stairs[index]}
        position={[individual.x, 0, individual.y]}
        rotation={[0,Math.PI,  0]} //y=0 is oppisite of Math.PI
      />
    ))}
  </>)
}
