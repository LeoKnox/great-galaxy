import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";

export default function App() {
  return (

      <div style={{ height: "100vh", width: "100vw" }}>
       <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="gray+" />
      </mesh>
    </Canvas>
    </div>

  );
}
