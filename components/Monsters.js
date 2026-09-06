export default function Monsters({
  position = [[0.5, 0, 0.5]],
  rotation = [0, 0, 0],
}) {
  return (
    <mesh position={position[0]}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="indigo" />
    </mesh>
  );
}
