import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";

export default function App() {
  return (

      <div style={{ height: "100vh", width: "100vw" }}>
       <Canvas>
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry />
        <meshBasicMaterial color="gray+" />
      </mesh>
    </Canvas>
    </div>

  );
}
