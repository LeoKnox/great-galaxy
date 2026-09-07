export default function Monsters({
  position = [
    [0.5, 0, 0.5],
    [1.5, 0, 2.5],
  ],
  rotation = [0, 0, 0],
}) {
  return position.map((cur) => (
    <>
      <p>1</p>

      <mesh position={cur}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="indigo" />
      </mesh>
    </>
  ));
}
