import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";

export default function App() {
  const squares = [
    { position: [0, 2, 0], color: "#8e9199" },
    { position: [2, 2, 0], color: "#bcc0cc" },
    { position: [0, 0, 0], color: "#bcc0cc" },
    { position: [2, 0, 0], color: "#8e9199" },
  ];
  return (
      <div style={{ height: "100vh", width: "100vw" }}>
       <Canvas>
       <ambientLight intensity={1} />
<group rotation={[-70, 0, 0]} position={[-1, 0, 0]} >
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
