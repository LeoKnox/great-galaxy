import Stairs from "./Stairs";
import PlayerInfo from "./PlayerInfo";
import Character from "./Character";
import Floor from "./Floor";
import Walls from "./Walls";

import Monsters from "./Monsters";
import { useState, useEffect } from "react";

export default function Room({ characterMenu, setCharacterMenu, setShowMenu }) {
  const [characterPosition, setCharacterPosition] = useState({
    position: [-0.5, 0, -1.5],
  });
  const stairsLoc = [
    { position: [-3.5, 0, 0.5], rotation: [0, 0, 0], options:<button>climb</button> },
    {
      position: [3.5, 0, -1.5],
      rotation: [0, Math.PI / 2, 0],
      color: "lightGray",
      options:<button>climb</button>
    },
  ];

  function collision(x = -2.5, y = 0, z = -2.5, offsetx, offsety, offsetz) {
    let temp = [x + offsety, y, z + offsetz];
    let c = stairsLoc.some((value, index) =>
      value.position.every((coord, loc) => coord == temp[loc])
    );
    if (c) {
      setCharacterMenu([...characterMenu,stairsLoc.options])
      setShowMenu(true);
      
      return [x + offsetx, offsety + 1, z + offsetz];
    }
    setShowMenu(false);
    return [x + offsetx, offsety, z + offsetz];
  }

  useEffect(() => {
    function handleKeyDown(event) {
      const [x, y, z] = [...characterPosition.position];
      const key = event.key.toLowerCase();

      switch (key) {
        case "w":
          setCharacterPosition({
            ...characterPosition,
            position: collision(x, y, z, 0, 0, -1),
          });
          break;

        case "s":
          setCharacterPosition({
            ...characterPosition,
            position: collision(x, y, z, 0, 0, 1),
          });
          break;

        case "a":
          setCharacterPosition({
            ...characterPosition,
            position: collision(x, y, z, -1, 0, 0),
          });
          break;

        case "d":
          setCharacterPosition({
            ...characterPosition,
            position: collision(x, y, z, 1, 0, 0),
          });
          break;

        default:
          [x, y, z];
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [characterPosition]);

  return (
    <>
      <Floor width={12} depth={8} />
      <Walls />

      {stairsLoc.map((i, v) => (
        <Stairs
          position={[...stairsLoc[v].position]}
          rotation={[...stairsLoc[v].rotation]}
          color={stairsLoc[v].color}
        />
      ))}

      <Character
        position={[...characterPosition.position]}
        rotation={[0, 0, 0]}
      />
      <Monsters />
    </>
  );
}
