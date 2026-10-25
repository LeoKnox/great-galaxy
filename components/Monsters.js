import * as THREE from "three";

export default function createMonsters({
  position = [
    [0.5, 0, 0.5],
    [1.5, 0, 2.5],
  ],
  rotation = [0, 0, 0],
} = {}) {
  const monster = new THREE.Group();

  const coneGeometry = new THREE.ConeGeometry(1, 2,8);
  const coneMaterial = new THREE.MeshStandardMaterial({
    color: "brown",
  });

  const cone = new THREE.Mesh(coneGeometry, coneMaterial);
  monster.add(cone);
  monster.position.set(...[0.5, 0, 0.5]);

  return <primitive object={monster} />;
}
