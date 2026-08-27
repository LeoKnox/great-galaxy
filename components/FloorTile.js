export default function FloorTile({
    position = [0, 0, 0],
    color = "#777b82",
  }) {
    return (
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={position}
        receiveShadow
      >
        <planeGeometry args={[TILE_SIZE, TILE_SIZE]} />
        <meshStandardMaterial
          color={color}
          side={THREE.DoubleSide}
        />
      </mesh>
    );
  }
