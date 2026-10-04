import * as THREE from "three";

export default function createCharacter(
  //position = [0, 0, 0],
  [x,y,z],
  rotation = [0, 0, 0]
) {
  const character = new THREE.Group();
console.log(position.position)
  character.position.set(position);
  //character.rotation.set(...rotation);

  // Cone
  const coneGeometry = new THREE.ConeGeometry(1, 2, 16);
  const coneMaterial = new THREE.MeshStandardMaterial({
    color: "green",
  });

  const cone = new THREE.Mesh(coneGeometry, coneMaterial);
  character.add(cone);

  // Circle
  const circleGeometry = new THREE.CircleGeometry(0.8, 24);
  const circleMaterial = new THREE.MeshStandardMaterial({
    color: "blue",
    side: THREE.DoubleSide,
  });

  const circle = new THREE.Mesh(circleGeometry, circleMaterial);

  circle.rotation.x = -Math.PI / 2;
  character.add(circle);

  return character;
}
