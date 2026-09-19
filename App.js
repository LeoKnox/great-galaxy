import "./styles.css";
import PlayerInfo from "./components/PlayerInfo";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState } from "react";

import Room from "./components/Room";
import { CharacterMenuProvider } from "./components/CharacterMenuContext";

export default function App() {
  const [character, setCharacter] = useState({
    name: "Midori",
    class: "fighter",
    level: 3,
    hp: 18,
  });
  const [showMenu, setShowMenu] = useState(false);
  const [characterMenu, setCharacterMenu] = useState([
    <button onClick={() => setShowMenu(false)}>Close</button>,
    <button>Attack</button>,
  ]);
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

        <Room setShowMenu={setShowMenu} />
      </Canvas>
      {showMenu && (
        <div className="collision-menu">
          <p>You collided with the stairs.</p>
          {characterMenu.map((action, index) => action)}
        </div>
      )}
      <PlayerInfo character={character} />
    </div>
  );
}
