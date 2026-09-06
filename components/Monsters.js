export default function Monsters({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="indigo" roughness={0.2} />
    </mesh>
  );
}
