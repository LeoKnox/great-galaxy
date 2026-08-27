export default function Floor({
    width = 12,
    depth = 8,
  }) {
    const tiles = [];
  
    for (let z = 0; z < depth; z++) {
      for (let x = 0; x < width; x++) {
        const worldX = x - width / 2 + 0.5;
        const worldZ = z - depth / 2 + 0.5;
  
        tiles.push(
          <FloorTile
            key={`${x}-${z}`}
            position={[worldX, 0, worldZ]}
            color={(x + z) % 2 === 0 ? "#777b82" : "#6d7178"}
          />
        );
      }
    }
  
    return <group>{tiles}</group>;
  }
