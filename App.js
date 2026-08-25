import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";

export default function App() {
  const squares = [
    { position: [0, 2, 0], color: "#8e9199" },
    { position: [2, 2, 0], color: "#bcc0cc" },
    { position: [0, 0, 0], color: "#bcc0cc" },
    { position: [2, 0, 0], color: "#8e9199" },
    
  ];
  const checker = []
  return (
      <div style={{ height: "100vh", width: "100vw" }}>
       <Canvas>
       <ambientLight intensity={1} />
<group rotation={[-70, 0, 0]} position={[-1.5, 0, 0]} >
{squares.map((square, index) => (
        <mesh key={index} position={square.position} rotation={square.rotation}>
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial
            color={square.color}
            
          />
          <mesh position={[3.5, 0, 1]}>
        <boxGeometry args={[2, 1, 1]}/>
        <meshBasicMaterial color="gray" />
      </mesh>
        </mesh>
      ))}
      </group>
      
    </Canvas>
    </div>

  );
}
