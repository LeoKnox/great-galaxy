export default function Character({position = [0, 0, 0],
    rotation = [0, 0, 0],}
) {
    return (
        <mesh position={position} rotation={rotation}>
         <coneGeometry args={[1, 2, 32]} /> 
      <meshStandardMaterial color="blue" />
    </mesh>
    )
}
