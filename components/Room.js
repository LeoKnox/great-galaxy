import * as THREE from "three";
import { useMemo } from "react";

import FloorTile from "./FloorTile.js";
import Stairs from "./Stairs.js";

export default function Floor({
    width = 12,
    depth = 8,
    light = "#f0d9b5",
  dark = "#6b4423",
  }) {
    const texture = useMemo(() => {
      const data = new Uint8Array(width * depth * 6);
      const lightColor = new THREE.Color(light);
      const darkColor = new THREE.Color(dark);
  
      for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
          const color = (x + y) % 2 === 0 ? lightColor : darkColor;
          const index = (y * depth + x) * 4;
  
          data[index] = Math.round(color.r * 255);
          data[index + 1] = Math.round(color.g * 255);
          data[index + 2] = Math.round(color.b * 255);
          data[index + 3] = 255;
        }
      }
  
      const map = new THREE.DataTexture(
        data,
        width,
        depth,
        THREE.RGBAFormat
      );
  
      map.magFilter = THREE.NearestFilter;
      map.minFilter = THREE.NearestFilter;
      map.colorSpace = THREE.SRGBColorSpace;
      map.needsUpdate = true;
  
      return map;
    }, [depth, light, dark]);
  
    return (
      <mesh
        position={[0,0,0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[width, depth]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  }
