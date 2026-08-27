import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function App() {
  const TILE_SIZE = 1;

  function FloorTile({
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

  function Floor({
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

  function Stairs({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    color = "#9a613d",
  }) {
    const stairWidth = 2;
    const stepDepth = 0.5;
    const stepHeight = 0.25;
  
    return (
      <group position={position} rotation={rotation}>
        {/* Lower step */}
        <mesh
          position={[0, stepHeight / 2, -stepDepth / 2]}
          castShadow
          receiveShadow
        >
          <boxGeometry
            args={[stairWidth, stepHeight, stepDepth]}
          />
          <meshStandardMaterial color={color} />
        </mesh>
  
        {/* Higher step */}
        <mesh
          position={[
            0,
            stepHeight + stepHeight / 2,
            stepDepth / 2,
          ]}
          castShadow
          receiveShadow
        >
          <boxGeometry
            args={[stairWidth, stepHeight * 2, stepDepth]}
          />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    );
  }

  function Walls() {
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
  function Room() {
    return (
      <>
        <Floor width={12} depth={8} />
        <Walls />
  
        {/* Reusable stair instances */}
        <Stairs position={[-3, 0, 0]} />
        <Stairs
          position={[3, 0, 1]}
          rotation={[0, Math.PI / 2, 0]}
          color="#77503b"
        />
      </>
    );
  }
  
  return (
      <div style={{ height: "100vh", width: "100vw" }}>
<Canvas
      orthographic
      shadows
      camera={{
        position: [0, 12, 0],
        rotation: [-Math.PI / 2, 0, 0],
        zoom: 65,
        near: 0.1,
        far: 100,
      }}
    >
      <color attach="background" args={["#202228"]} />

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 10, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <Room />
    </Canvas>
    </div>

  );
}
