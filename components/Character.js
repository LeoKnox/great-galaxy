import React from "react";

export default function Character({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) {
  return (
    <>
    <mesh position={position} rotation={rotation}>
      <coneGeometry args={[1, 2, 16]} />
      <meshStandardMaterial color="green" />
    </mesh>
    <group>
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[.8, 24]} /> 
      <meshStandardMaterial color="blue" />
    </mesh>
    </group>
    <svg viewBox="0 0 100 100" xmlns="http://w3.org">

    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
    

    <text>
      <textPath href="#circlePath">
        CURVED TEXT LOOKS BEST IN CAPS! • CURVED TEXT LOOKS BEST IN CAPS! •
      </textPath>
    </text>
  </svg>
    </>
  );
}
