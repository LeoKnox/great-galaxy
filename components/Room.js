import Stairs from "./Stairs";
import Floor from "./Floor";
import Walls from "./Walls";
import Character from "./Character";
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

  useEffect(() => {
    function handleKeyDown(event) {
      const key = event.key.toLowerCase();

      setCharacterPosition((position: [x, y, z]) => {
        switch (key) {
          case "w":
            return { position: [x, y, z - 1] };

          case "s":
            return [x, y, z + 1];

          case "a":
            return [x - 1, y, z];

          case "d":
            return [x + 1, y, z];

          default:
            return [x, y, z];
        }
      });
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
    </>
  );
}
