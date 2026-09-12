import Stairs from "./Stairs";
import PlayerInfo from "./PlayerInfo";
import Character from "./Character";
import Floor from "./Floor";
import Walls from "./Walls";

import Monsters from "./Monsters";
import { useState, useEffect } from "react";

export default function Room() {
  const [characterPosition, setCharacterPosition] = useState({
    position: [-0.5, 0, -1.5],
  });
  const stairsLoc = [
    { position: [-3.5, 0, 0.5], rotation: [0, 0, 0] },
    {
      position: [3.5, 0, -1.5],
      rotation: [0, Math.PI / 2, 0],
      color: "lightGray",
    },
  ];

  function collision(x = -2.5, y = 0, z = -2.5, offsetx, offsety, offsetz) {
    let temp = [x + offsetx, offsety, z + offsetz];
    console.log(stairsLoc[0].position);
    if (stairsLoc.every((value, index) => temp === value.position)) {
      console.log("Stairs");
      return [x + offsetx, 2, z + offsetz];
    }
    return temp;
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
