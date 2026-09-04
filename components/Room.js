import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";

import Room from "./components/Room";

export default function App() {
  
  
  
  return (
      <div style={{ height: "100vh", width: "90vw" }}>
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
