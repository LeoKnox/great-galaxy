import * as THREE from "three";

export default function createMonsters({
  position = [
    [0.5, 0, 0.5],
    [1.5, 0, 2.5],
  ],
  rotation = [0, 0, 0],
} = {}) {
  const pack = new THREE.Group();

  position.forEach(([x,y,z], index) => {
  const monster = new THREE.Group();

  const coneGeometry = new THREE.ConeGeometry(1, 2,8);
  const coneMaterial = new THREE.MeshStandardMaterial({
    color: "brown",
  });

  const cone = new THREE.Mesh(coneGeometry, coneMaterial)
  monster.add(cone);
  monster.position.set(...position[0]);
  pack.add(monster)

  return pack
});
console.log("p "+JSON.stringify(pack[0]))

  return( 
  <>
  {position.map((individual, index) => (
    <primitive object={pack} position={individual[index]} />
  ))}
  </>
  )
}
