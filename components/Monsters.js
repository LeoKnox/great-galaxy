import * as THREE from "three";

export default function createMonsters({
  position = [
    [0.5, 0, 0.5],
    [1.5, 0, 2.5],
  ],
  rotation = [0, 0, 0],
} = {}) {
  const monsters = new THREE.Group();

  const geometry = new THREE.SphereGeometry(0.5, 16, 16);
  const material = new THREE.MeshStandardMaterial({
    color: "indigo",
  });

  position.forEach((currentPosition) => {
    const monster = new THREE.Mesh(
      geometry,
      material
    );

    monster.position.set(...currentPosition);
    monster.castShadow = true;
    monster.receiveShadow = true;

    monsters.add(monster);
  });

  monsters.rotation.set(...rotation);

  return monsters;
}
