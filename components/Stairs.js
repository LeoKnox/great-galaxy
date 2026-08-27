import React from "react";

export default function Stairs({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  color = "#9a613d",
}) {
  const stairWidth = 1;
  const stepDepth = .5;
  const stepHeight = 0.25;

  return (
    <group position={position} rotation={rotation}>
      {/* Lower step */}
      <mesh
        position={[
          0,
          stepHeight / 2,
          -stepDepth / 2,
        ]}
        castShadow
        receiveShadow
      >
        <boxGeometry
          args={[
            stairWidth,
            stepHeight,
            stepDepth,
          ]}
        />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Higher step */}
      <mesh
        position={[
          0,
          stepHeight + stepHeight / 2,
          stepDepth / 2,
        ]}
        castShadow
        receiveShadow
      >
        <boxGeometry
          args={[
            stairWidth,
            stepHeight * 2,
            stepDepth,
          ]}
        />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}
