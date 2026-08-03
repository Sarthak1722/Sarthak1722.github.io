import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GrandPianoModel = ({ trackIndex, isPlaying, ...props }) => {
  const groupRef = useRef();
  const { scene } = useGLTF("/models/grand_piano.glb");
  const { size } = useThree();

  // Responsive scale
  const isMobile = size.width < 768;
  const modelScale = isMobile ? 0.65 : 0.95;

  // Traverse materials to ensure polished glossy finish and bright light reflections
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.roughness = 0.25;
          child.material.metalness = 0.35;
          child.material.needsUpdate = true;
        }
      });
    }
  }, [scene]);

  // GSAP rotation transition whenever trackIndex changes
  useGSAP(() => {
    if (groupRef.current) {
      gsap.fromTo(
        groupRef.current.rotation,
        { y: groupRef.current.rotation.y + Math.PI / 2 },
        {
          y: groupRef.current.rotation.y + Math.PI * 2,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }
  }, [trackIndex]);


  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* Piano at a 3/4 angled position — slightly left and elevated for visual drama */}
      <primitive object={scene} scale={modelScale} position={[0.2, -0.55, 0]} rotation={[0.05, -0.35, 0]} />
    </group>
  );
};

useGLTF.preload("/models/grand_piano.glb");

export default GrandPianoModel;
