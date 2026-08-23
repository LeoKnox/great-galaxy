import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";

export default function App() {
  const squares = [
    { position: [-1, 1, 0], color: "red" },
    { position: [1, 1, 0], color: "green" },
    { position: [-1, -1, 0], color: "blue" },
    { position: [1, -1, 0], color: "yellow" },
  ];
  return (
      <div style={{ height: "100vh", width: "100vw" }}>
       <Canvas>
<group rotation={[-70, 0, 0]} position={[0, 0, 0]} >
{squares.map((square, index) => (
        <mesh key={index} position={square.position}>
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial
            color={square.position}
            
          />
        </mesh>
      ))}
      </group>
      {/*<mesh rotation={[0.5, 0.5, 0]} position={[0, -0, 0]} scale={[2, .5, 2]}>
        <boxGeometry />
        <meshBasicMaterial color="gray" />
      </mesh>*/}
    </Canvas>
    </div>

  );
}
