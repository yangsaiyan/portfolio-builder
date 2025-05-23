import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import earthTexture from "/earthTexture.webp";
import sunTexture from "/sunTexture.webp";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

interface SpinningEarthBackgroundProps {
  sections?: number;
  currentSection?: number;
}

export default function SpinningEarthBackground({
  sections = 1,
  currentSection = 0,
}: SpinningEarthBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const currentAngle = useRef(0);
  const targetAngle = useRef(0);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const earthRef = useRef<THREE.Mesh | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (sections > 0) {
      const sectionAngle = (2 * Math.PI) / sections;
      targetAngle.current = currentSection * sectionAngle;
    }
  }, [currentSection, sections]);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    camera.position.set(50, 30, 50);
    camera.lookAt(0, 0, 0);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      2.0,
      0.8,
      0.7 
    );
    composer.addPass(bloomPass);

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const sunGeometry = new THREE.SphereGeometry(5, 64, 64);
    const textureLoader = new THREE.TextureLoader();

    textureLoader.load(
      sunTexture,
      (texture) => {
        const sunMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 0.9,
          color: 0xffff00, 
        });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        const sunLight = new THREE.PointLight(0xffff00, 3, 100);
        sunLight.position.set(0, 0, 0);
        sunLight.castShadow = true;
        scene.add(sunLight);

        const sunLight2 = new THREE.DirectionalLight(0xffff00, 1.5);
        sunLight2.position.set(0, 0, 0);
        scene.add(sunLight2);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
        scene.add(hemiLight);

        const earthGeometry = new THREE.SphereGeometry(1, 64, 64);

        textureLoader.load(
          earthTexture,
          (texture) => {
            const earthMaterial = new THREE.MeshStandardMaterial({
              map: texture,
              transparent: true,
              opacity: 1,
              roughness: 0.7,
              metalness: 0.1,
              emissive: 0x000000,
              emissiveIntensity: 0.2,
            });
            const earth = new THREE.Mesh(earthGeometry, earthMaterial);
            earthRef.current = earth;
            earth.castShadow = true;
            earth.receiveShadow = true;
            scene.add(earth);

            const atmosphereGeometry = new THREE.SphereGeometry(1.1, 64, 64);
            const atmosphereMaterial = new THREE.MeshPhongMaterial({
              color: 0x0077ff,
              transparent: true,
              opacity: 0.2,
              side: THREE.BackSide,
            });
            const atmosphere = new THREE.Mesh(
              atmosphereGeometry,
              atmosphereMaterial
            );
            scene.add(atmosphere);

            const starsGeometry = new THREE.BufferGeometry();
            const starsMaterial = new THREE.PointsMaterial({
              color: 0xffffff,
              size: 0.1,
              transparent: true,
              sizeAttenuation: true,
              blending: THREE.AdditiveBlending,
            });

            const starsVertices = [];
            const starsSizes = [];

            for (let i = 0; i < 15000; i++) {
              const radius = 800 + Math.random() * 1200;
              const theta = Math.random() * Math.PI * 2;
              const phi = Math.acos(2 * Math.random() - 1);

              const x = radius * Math.sin(phi) * Math.cos(theta);
              const y = radius * Math.sin(phi) * Math.sin(theta);
              const z = radius * Math.cos(phi);

              starsVertices.push(x, y, z);
              starsSizes.push(Math.random() * 0.3 + 0.1);
            }

            starsGeometry.setAttribute(
              "position",
              new THREE.Float32BufferAttribute(starsVertices, 3)
            );
            starsGeometry.setAttribute(
              "size",
              new THREE.Float32BufferAttribute(starsSizes, 1)
            );

            const stars = new THREE.Points(starsGeometry, starsMaterial);
            scene.add(stars);

            scene.fog = new THREE.FogExp2(0x000000, 0.0005);

            const orbitGeometry = new THREE.RingGeometry(20, 20.1, 128);
            const orbitMaterial = new THREE.MeshBasicMaterial({
              color: 0xffffff,
              transparent: true,
              opacity: 0.1,
              side: THREE.DoubleSide,
            });
            const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
            orbit.rotation.x = Math.PI / 2;
            scene.add(orbit);

            const initialAngle = (2 * Math.PI * currentSection) / sections;
            earth.position.x = Math.cos(initialAngle) * 20;
            earth.position.z = Math.sin(initialAngle) * 20;
            currentAngle.current = initialAngle;
            targetAngle.current = initialAngle;

            camera.position.x = earth.position.x + 30;
            camera.position.y = 30;
            camera.position.z = earth.position.z + 30;
            camera.lookAt(earth.position);

            const animate = () => {
              requestAnimationFrame(animate);

              if (!sceneRef.current || !earthRef.current || !cameraRef.current)
                return;

              sun.rotation.y += 0.002;

              earth.rotation.y += 0.01;
              atmosphere.rotation.y += 0.01;

              stars.rotation.y += 0.00005;

              let angleDiff = targetAngle.current - currentAngle.current;

              while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
              while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

              const distance = Math.abs(angleDiff);

              let speed;
              if (distance > 0.1) {
                speed = 0.005 + distance * 0.002;
              } else {
                speed = 0.005 * (distance / 0.1);
              }

              speed = Math.min(speed, 0.01);

              currentAngle.current += angleDiff * speed;

              earth.position.x = Math.cos(currentAngle.current) * 20;
              earth.position.z = Math.sin(currentAngle.current) * 20;

              const cameraTargetX = earth.position.x + 30;
              const cameraTargetY = 30;
              const cameraTargetZ = earth.position.z + 30;

              camera.position.x += (cameraTargetX - camera.position.x) * speed;
              camera.position.y += (cameraTargetY - camera.position.y) * speed;
              camera.position.z += (cameraTargetZ - camera.position.z) * speed;

              camera.lookAt(earth.position);

              composer.render();
            };

            animate();
          },
          undefined,
          (error) => {
            console.error("Error loading earth texture:", error);
          }
        );
      },
      undefined,
      (error) => {
        console.error("Error loading sun texture:", error);
      }
    );

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      composer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
