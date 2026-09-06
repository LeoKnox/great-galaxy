export default function Monsters() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="white" roughness={0.2} />
    </mesh>
  );
}
