export default function Walls() {
    const wallHeight = 1;
    const wallThickness = 0.2;
    const roomWidth = 12;
    const roomDepth = 8;
  
    return (
      <group>
        {/* Back wall */}
        <mesh
          position={[0, wallHeight / 2, -roomDepth / 2]}
          castShadow
        >
          <boxGeometry
            args={[roomWidth, wallHeight, wallThickness]}
          />
          <meshStandardMaterial color="#3b3d42" />
        </mesh>
  
        {/* Front wall */}
        <mesh
          position={[0, wallHeight / 2, roomDepth / 2]}
          castShadow
        >
          <boxGeometry
            args={[roomWidth, wallHeight, wallThickness]}
          />
          <meshStandardMaterial color="#3b3d42" />
        </mesh>
  
        {/* Left wall */}
        <mesh
          position={[-roomWidth / 2, wallHeight / 2, 0]}
          castShadow
        >
          <boxGeometry
            args={[wallThickness, wallHeight, roomDepth]}
          />
          <meshStandardMaterial color="#3b3d42" />
        </mesh>
  
        {/* Right wall */}
        <mesh
          position={[roomWidth / 2, wallHeight / 2, 0]}
          castShadow
        >
          <boxGeometry
            args={[wallThickness, wallHeight, roomDepth]}
          />
          <meshStandardMaterial color="#3b3d42" />
        </mesh>
      </group>
    );
  }
