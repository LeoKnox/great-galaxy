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
    </>
  );
}
