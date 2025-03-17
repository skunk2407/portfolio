import React from "react";
import { motion } from "framer-motion";

const generateParticles = (num) => {
  return Array.from({ length: num }).map((_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    duration: Math.random() * 5 + 3,
    size: Math.random() * 3 + 1,
  }));
};

const BackgroundParticles = () => {
  const particles = generateParticles(30);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            x: particle.x + (Math.random() * 10 - 5),
            y: particle.y + (Math.random() * 10 - 5),
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bg-white rounded-full"
          style={{
            width: particle.size + "px",
            height: particle.size + "px",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
