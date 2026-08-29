import Stairs from "./Stairs";
import Floor from "./Floor";
import Walls from "./Walls";

export default function Room() {
    const stairsLoc = [{position:[-3.5, 0, .5], rotation:[0, 0, 0]}]
    return (
      <>
        <Floor width={12} depth={8} />
        <Walls />
  
        {/* Reusable stair instances */}
        <Stairs
        position={[stairsLoc[0].position[0], stairsLoc[0].position[1], stairsLoc[0].position[2]]}
        rotation={[stairsLoc[0].rotation[0], stairsLoc[0].rotation[1], stairsLoc[0].rotation[2]]}
      />
        <Stairs
        position={[3.5, 0, -1.5]}
        rotation={[0, Math.PI / 2, 0]}
        color="darkgray"
      />
      </>
    );
  }
