import { Canvas } from '@react-three/fiber';
import Stairs from "./Stairs";
import PlayerInfo from "./PlayerInfo";
import Character from "./Character";
import Floor from "./Floor";
import Walls from "./Walls";
import Monsters from "./Monsters";
import { useState, useEffect } from "react";

export default function Room({ setCharacterMenu, setShowMenu }) {
  const [characterPosition, setCharacterPosition] = useState({
    position: [-0.5, 0, -1.5],
  });
  const stairsLoc = [
    { position: [-3.5, 0, 0.5], rotation: [0, 0, 0], options:["climb","jump"] },
    {
      position: [3.5, 0, -1.5],
      rotation: [0, Math.PI / 2, 0],
      color: "lightGray",
      options:["climb",["cover", () => setShowMenu(false)]]
    },
  ];

  function collision(x = -2.5, y = 0, z = -2.5, offsetx, offsety, offsetz) {
    const newPosition = [x + offsetx, y, z + offsetz];

  const stair = stairsLoc.find((stair) =>
    stair.position.every((value, index) => value === newPosition[index])
  );
  if (stair) {
    setCharacterMenu((currentMenu) => [
      ...new Set([...currentMenu, ...stair.options]),
    ]);
    setShowMenu(true);
    return [newPosition[0], offsety + 1, newPosition[2]];
  }
  setCharacterMenu((currentMenu) =>
    currentMenu.filter(
      (option) =>
        !stairsLoc.some((stair) => stair.options.includes(option))
    )
  );

  setShowMenu(false);

  return [newPosition[0], offsety, newPosition[2]];
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
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />


      <Character
        position={characterPosition.position}
        rotation={[0, 0, 0]}
      />
<Floor />

    </>

  );
}
