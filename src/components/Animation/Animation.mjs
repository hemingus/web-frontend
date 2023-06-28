import React, { useEffect, useRef } from 'react';
import "./Animation.css"
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';



const earth_surface = "earth_surface.jpg"
const moon_surface = "moon_surface.jpg"

const Animation = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    let frameId;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Earth sphere
    const earth_geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const earth_texture = textureLoader.load(earth_surface);
    const earth_material = new THREE.MeshBasicMaterial({ map: earth_texture });
    const earth_sphere = new THREE.Mesh(earth_geometry, earth_material);
    scene.add(earth_sphere);

    // Moon sphere
    const moon_geometry = new THREE.SphereGeometry(0.1, 32, 32);
    const moon_texture = textureLoader.load(moon_surface);
    const moon_material = new THREE.MeshBasicMaterial({ map: moon_texture });
    const moon_sphere = new THREE.Mesh(moon_geometry, moon_material);
    scene.add(moon_sphere);

    // Create the bloom effect
    const bloomEffect = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomEffect.threshold = 0; // Controls the brightness threshold for glowing
    bloomEffect.strength = 1; // Controls the strength/intensity of the glow effect
    bloomEffect.radius = 2; // Controls the size/spread of the glow effect

    // Setup the post-processing composer
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(bloomEffect);

    camera.position.z = 5;

    const center = new THREE.Vector3(0, 0, 0); // Center of the circular trajectory
    const radius = 2; // Radius of the circular trajectory
    const speed = 0.3; // Speed of the sphere's movement

    const animate = () => {
      const time = Date.now() * 0.001; // Current time in seconds

      const x = center.x + Math.cos(time * speed) * (2*radius);
      const y = center.y + 0.2*(Math.sin(time * speed) * radius);
      const z = center.z - 2*(Math.sin(time * speed) * radius);

      moon_sphere.position.set(x, y, z);
      moon_sphere.rotation.x += 0.01;
      moon_sphere.rotation.y += 0.01;
      earth_sphere.rotation.x += 0.005;
      earth_sphere.rotation.y += 0.01;

      composer.render();
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default Animation;