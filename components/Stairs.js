import React from "react";

export default function Stairs({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  color = "gray",
}) {
  const mesh = useMemo(() => {
    const group = new THREE.Group();

    const material = new THREE.MeshStandardMaterial({ color: "red" });

    const steps = [
      { width: 0.8, height: 1 },
      { width: 0.8, height: 0.5 },
    ];

    steps.forEach(({ width, height }, index) => {
      const geometry = new THREE.BoxGeometry(width, height, 0.8);
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

  return <primitive object={mesh} position={[-3, 0, -3]} />;
}
