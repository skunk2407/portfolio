import React, { useState } from "react";
import { motion } from "framer-motion";
import BackgroundParticles from "../components/BackgroundParticles";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.01;
    const moveY = (clientY - window.innerHeight / 2) * 0.01;
    setPosition({ x: moveX, y: moveY });
  };

  return (
    <div
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <BackgroundParticles />

      <motion.div
        className="absolute text-center text-5xl font-bold"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        Nolan Berhault <br />
        <span className="text-green-400">Développeur Web & Passionné de Tech</span>
      </motion.div>
    </div>
  );
};

export default Home;
