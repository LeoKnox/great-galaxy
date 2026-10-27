import * as THREE from "three";

export default function createMonsters({
  position = [
    [0.5, 0, 0.5],
    [2.5, 0, 2.5],
  ],
  rotation = [0, 0, 0],
} = {}) {
  const pack = new THREE.Group();

  position.forEach(([x,y,z], index) => {
  const monster = new THREE.Group();

  const coneGeometry = new THREE.ConeGeometry(.5, 1,8);
  const coneMaterial = new THREE.MeshStandardMaterial({
    color: "brown",
  });

  const cone = new THREE.Mesh(coneGeometry, coneMaterial)
  monster.add(cone);
  monster.position.set(...position[index]);
  pack.add(monster)

  return pack
});

  return( 
  <>
  {position.map((individual, index) => (
    <primitive object={pack} position={individual[index]} />
  ))}
  </>
  )
}
