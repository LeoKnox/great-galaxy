import PlayerInfo from "./PlayerInfo";

export default function Character({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) {
  return (
    <>
      <PlayerInfo />
      <mesh position={position} rotation={rotation}>
        <coneGeometry args={[1, 2, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}
