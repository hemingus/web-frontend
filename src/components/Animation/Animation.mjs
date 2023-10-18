import React, { useEffect, useRef } from 'react';
import "./Animation.css"
import {
  Scene, 
  PerspectiveCamera, 
  WebGLRenderer, 
  SphereGeometry,
  BoxGeometry,
  CircleGeometry,
  BackSide,
  TextureLoader, 
  MeshBasicMaterial, 
  Mesh, 
  Vector2, 
  Vector3,
  LinearSRGBColorSpace
} from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';


const background = "DALL-E_generated_SPACE.png"
const earth_surface = "earth_surface.jpg"
const moon_surface = "moon_surface.jpg"
const oasis_image = "music_g_space.png"
const male_image = "male_cosmos.png"
const female_image = "female_cosmos.png"

const Animation = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new WebGLRenderer();
  
    let frameId;
    renderer.setSize(window.innerWidth*0.99, window.innerHeight*0.99);
    renderer.setClearColor(0x000000);
    renderer.outputColorSpace = LinearSRGBColorSpace;
    sceneRef.current.appendChild(renderer.domElement);
    const textureLoader = new TextureLoader();

    // Background
    const backgroundTexture = textureLoader.load(background);
    backgroundTexture.colorSpace = LinearSRGBColorSpace; // Set encoding to Linear
    
    scene.background = backgroundTexture;
    const cubeGeometry = new BoxGeometry(1000, 1000, 1000);

    // Set the cube material to use the background texture
    const cubeMaterial = [
      new MeshBasicMaterial({ map: backgroundTexture, side: BackSide }), // Right side
      new MeshBasicMaterial({ map: backgroundTexture, side: BackSide }), // Left side
      new MeshBasicMaterial({ map: backgroundTexture, side: BackSide }), // Top side
      new MeshBasicMaterial({ map: backgroundTexture, side: BackSide }), // Bottom side
      new MeshBasicMaterial({ map: backgroundTexture, side: BackSide }), // Front side
      new MeshBasicMaterial({ map: backgroundTexture, side: BackSide })  // Back side
    ];

    // Create the cube mesh
    const cubeMesh = new Mesh(cubeGeometry, cubeMaterial);

    // Add the cube to the scene
    scene.add(cubeMesh);

    // Earth sphere
    const earth_geometry = new SphereGeometry(0.5, 32, 32);
    const earth_texture = textureLoader.load(earth_surface);
    const earth_material = new MeshBasicMaterial({ map: earth_texture });
    const earth_sphere = new Mesh(earth_geometry, earth_material);
    scene.add(earth_sphere);

    // Moon sphere
    const moon_geometry = new SphereGeometry(0.1, 32, 32);
    const moon_texture = textureLoader.load(moon_surface);
    const moon_material = new MeshBasicMaterial({ map: moon_texture });
    const moon_sphere = new Mesh(moon_geometry, moon_material);
    scene.add(moon_sphere);

    // Face
    const face_geometry = new CircleGeometry(0.3, 32); // Width, Height

    // Male cosmos
    const male_texture = textureLoader.load(male_image);
    const male_material = new MeshBasicMaterial({ map: male_texture, transparent: true });
    const male = new Mesh(face_geometry, male_material);
    male.position.set(0,1,1);
  
    // Female cosmos
    const female_texture = textureLoader.load(female_image);
    const female_material = new MeshBasicMaterial({ map: female_texture, transparent: true });
    const female = new Mesh(face_geometry, female_material);
    female.position.set(0,1,1);
    female.position.z = 0.99;
    female.rotation.y = 3.14;

    // Add faces to scene
    scene.add(male);
    scene.add(female);

    // Oasis image
    const oasis_geometry = new CircleGeometry(0.3, 32); // Width, Height
    const oasis_texture = textureLoader.load(oasis_image);
    const oasis_material = new MeshBasicMaterial({ map: oasis_texture });
    const oasis = new Mesh(oasis_geometry, oasis_material);
    oasis.position.set(0,0,0);
    scene.add(oasis);

    // Create the bloom effect
    const bloomEffect = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomEffect.threshold = 0; // Controls the brightness threshold for glowing
    bloomEffect.strength = 0.5; // Controls the strength/intensity of the glow effect
    bloomEffect.radius = 2; // Controls the size/spread of the glow effect

    // Setup the post-processing composer
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(bloomEffect);

    camera.position.z = 0;

    const center = new Vector3(0, 0, 0); // Center of the circular trajectory
    const radius = 8; // Radius of the circular trajectory
    const speed = 0.1; // Speed of the sphere's movement

    const animate = () => {
      const time = Date.now() * 0.001; // Current time in seconds

      const x = center.x + Math.cos(time * speed) * (0.5*radius);
      const y = center.y + Math.sin(time * speed) * (0.5*radius);
      const z = center.z - Math.sin(time * speed) * radius;

      moon_sphere.position.set(x, y, z);
      const over_the_moon = new Vector3(1 - moon_sphere.position.x * 0.1, 1 - moon_sphere.position.y * 0.1, 1 - moon_sphere.position.z);
      moon_sphere.rotation.x += 0.01;
      moon_sphere.rotation.y += 0.01;
      earth_sphere.rotation.x += 0.005;
      earth_sphere.rotation.y += 0.01;
      oasis.position.set(x/8,(y/8)+2,z/8);
      male.rotation.y += 0.01;
      female.rotation.y += 0.01;

      camera.position.lerp(over_the_moon, 0.05);
      
      camera.lookAt(center);
      
      composer.render();
      frameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <div className="earth-moon-animation" ref={sceneRef} />;
};

export default Animation;