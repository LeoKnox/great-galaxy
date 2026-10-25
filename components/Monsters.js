import * as THREE from "three";

export default function createMonsters({
  position = [
    [0.5, 0, 0.5],
    [1.5, 0, 2.5],
  ],
  rotation = [0, 0, 0],
} = {}) {
  const monster = new THREE.Group();

  const geometry = new THREE.SphereGeometry(0.5, 16, 16);
  const material = new THREE.MeshStandardMaterial({
    color: "indigo",
  });
  
  //const monster = new THREE.Group();

  const coneGeometry = new THREE.ConeGeometry(1, 2, 16);
  const coneMaterial = new THREE.MeshStandardMaterial({
    color: "green",
  });

  const cone = new THREE.Mesh(coneGeometry, coneMaterial);
  character.add(cone);

  return monster;
}
