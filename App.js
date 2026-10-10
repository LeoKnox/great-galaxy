import "./styles.css";
import { useThree } from "@react-three/fiber";
import PlayerInfo from "./components/PlayerInfo";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState,useEffect } from "react";

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
    ["Close",() => setShowMenu(false)],
    ["Attack"],
  ]);
  function BoardCamera() {
    const { camera } = useThree();
  
    useEffect(() => {
      camera.position.set(-1, 12, 0);
      camera.up.set(0, 0, -1); // set before lookAt for a top-down view
      camera.lookAt(-1, -3, 0);
      camera.updateProjectionMatrix();
    }, [camera]);
  
    return null;
  }
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        orthographic
        shadows
        camera={{
    position: [-1, 12, 0], 
    zoom: 45,              
    near: 0.1,
    far: 100,
  }}
      >
         <BoardCamera />
        <color attach="background" args={["#202228"]} />

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 10, 5]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
   
          <Room characterMenu={characterMenu} setCharacterMenu={setCharacterMenu} setShowMenu={setShowMenu} />
      </Canvas>

      {showMenu && (
        <div className="collision-menu">
          <p>You collided with the stairs.</p>
          {characterMenu.map((action) => <button onClick={action[1]}>{action}</button>)}
        </div>
      )}
      <playerInfo character={character} />
    </div>
  );
}
