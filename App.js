import "./styles.css";
import { Canvas, useFrame } from "@react-three/fiber";

export default function App() {
  function Stair({
    size = 1,
    position = [0, 0, 0],
    color = "#8e9199",
  }) {
    return (
      <group position={position}>
        <mesh position={[0, size * 0.75, 0]}>
          <boxGeometry args={[size, size / 2, size]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position={[0, size / 4, -size / 4]}>
          <boxGeometry args={[size, size * 1.5, size / 2]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    );
  }
  const squares = [
    { position: [0, 2, 0], color: "#8e9199" },
    { position: [2, 2, 0], color: "#bcc0cc" },
    { position: [0, 0, 0], color: "#bcc0cc" },
    { position: [2, 0, 0], color: "#8e9199" },
    
  ];
  const checker = []
  return (
      <div style={{ height: "100vh", width: "100vw" }}>
       <Canvas camera={{ position: [0, 10, 0], rotation: [-Math.PI / 2, 0, 0], fov: 50 }}>
       <ambientLight intensity={1} />
<group position={[-1.5, 0, 0]} >
{squares.map((square, index) => (
        <mesh key={index} position={square.position} rotation={square.rotation}>
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial
            color={square.color}
            
          />
          <mesh position={[3.5, 0, 1]}>
        
      </mesh>
        </mesh>
      ))}
      <Stair position={[3.25, -.75, .75]} />
      </group>

    </Canvas>
    </div>

  );
}
