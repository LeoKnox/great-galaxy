import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";

export default function App() {
  const squares = [
    { position: [-1, 1, 0], color: "#6B6361" },
    { position: [1, 1, 0], color: "#94908F" },
    { position: [-1, -1, 0], color: "#94908F" },
    { position: [1, -1, 0], color: "#6B6361" },
  ];
  return (
      <div style={{ height: "100vh", width: "100vw" }}>
       <Canvas>
<group rotation={[70, 0, 0]} position={[-1.5, 0, 0]} >
{squares.map((square, index) => (
        <mesh key={index} position={square.position}>
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial
            color={square.color}
            
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
