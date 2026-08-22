import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";

export default function App() {
  return (
      <div style={{ height: "100vh", width: "100vw" }}>
       <Canvas>
      <mesh rotation={[100, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry  args={[3,3]}/>
        <meshBasicMaterial color="darkgray" />
      </mesh>
      <mesh rotation={[100, 0, 0]} position={[3, 0, 0]}>
        <planeGeometry  args={[3,3]}/>
        <meshBasicMaterial color="gray" />
      </mesh>
      <mesh rotation={[100, 0, 0]} position={[0, 0, -3]}>
        <planeGeometry  args={[3,3]}/>
        <meshBasicMaterial color="gray" />
      </mesh>
      {/*<mesh rotation={[0.5, 0.5, 0]} position={[0, -0, 0]} scale={[2, .5, 2]}>
        <boxGeometry />
        <meshBasicMaterial color="gray" />
      </mesh>*/}
    </Canvas>
    </div>

  );
}
