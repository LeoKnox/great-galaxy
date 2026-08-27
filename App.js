import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";
import Stairs from "./components/Stairs";
import Floor from "./components/Floor";
import Walls from "./components/Walls";

export default function App() {
  
  function Room() {
    return (
      <>
        <Floor width={12} depth={8} />
        <Walls />
  
        {/* Reusable stair instances */}
        <Stairs
        position={[-3.5, 0, .5]}
        rotation={[0, 0, 0]}
      />
        <Stairs
        position={[3.5, 0, -1.5]}
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
