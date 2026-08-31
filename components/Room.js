import Stairs from "./Stairs";
import Floor from "./Floor";
import Walls from "./Walls";
import Character from "./Character";
import {useState} from "react";

export default function Room() {
    const [characterPosition, setCharacterPosition] = useState({position:[
        -0.5,
        0,
        -1.5,
      ]});
    const stairsLoc = [{position:[-3.5, 0, .5], rotation:[0, 0, 0]},
    {position:[3.5, 0, -1.5], rotation:[0, Math.PI / 2, 0],color:"lightGray"}]
    return (
      <>
        <Floor width={12} depth={8} />
        <Walls />
  
        {stairsLoc.map((i,v) => (
        <Stairs
        position={[stairsLoc[v].position[0], stairsLoc[v].position[1], stairsLoc[v].position[2]]}
        rotation={[stairsLoc[v].rotation[0], stairsLoc[v].rotation[1], stairsLoc[v].rotation[2]]}
      color= {stairsLoc[v].color}
      />
    ))}
    <Character position={[...characterPosition.position]} rotation={[0, 0, 0]}/>
      </>
    );
  }
