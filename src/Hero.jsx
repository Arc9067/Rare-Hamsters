import React from "react";
import threeD from "./assets/3d.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import ParallaxCard from './components/ParallaxCard'
import TextModel from './components/TextModel'
const Hero = () => {
  return (
    <section className="py-32 w-full" id="hero">
      {/* <div className="container flex justify-center items-center">
        <img src={threeD} alt="" className="w-9/12 md:w-fit" />
      </div> */}
      <Canvas
        style={{
          width: '100vw',
          height: '80vh',
        }}
        camera={{
          fov: 70,
          far: 1000,
          near: 0.1,
        }}
      >
        <motion.group
          animate={{
            rotateY: [0,Math.PI * 2],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear',
          }}
        >
          <ParallaxCard />
          <TextModel />
        </motion.group>
        <ambientLight color={'#ffffff'} intensity={0.3} />
        <directionalLight color={'#fff0dd'} position={[0, -5, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </section>
  );
};

export default Hero;
