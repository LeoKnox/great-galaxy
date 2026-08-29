import Stairs from "./components/Stairs";
import Floor from "./components/Floor";
import Walls from "./components/Walls";

export default function Room() {
    return (
      <>
        <Floor width={12} depth={8} />
        <Walls />
  
        {/* Reusable stair instances */}
        <Stairs
        position={[-3.5, 0, .5]}
        rotation={[0, 0, 0]}
      />
        <Stairs
        position={[3.5, 0, -1.5]}
        rotation={[0, Math.PI / 2, 0]}
        color="#77503b"
      />
      </>
    );
  }
