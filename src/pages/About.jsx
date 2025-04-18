import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const text = `Je m'appelle Nolan Berhault, étudiant en BTS SIO option SLAM.

Passionné par l’informatique et les nouvelles technologies, j’ai toujours aimé comprendre, créer et optimiser.

Je me spécialise dans le développement web et l’automatisation, tout en ayant un fort intérêt pour la cybersécurité.

J’ai travaillé sur plusieurs projets concrets en JavaScript, HTML, CSS, Python, ainsi qu’avec des outils comme Zennoposter et Selenium.

En dehors du code, je suis passionné par l’Histoire, le gaming et la musculation, des activités qui nourrissent ma curiosité et ma rigueur.

Je me projette dans un métier alliant développement et cybersécurité, avec l’ambition d’apporter des solutions efficaces et sécurisées.`;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">À propos de moi</h1>
      <p className="text-gray-300 mb-6 text-lg text-justify whitespace-pre-line">
        {displayedText}
      </p>

      <div className="flex gap-4 mt-8 justify-center flex-wrap">
        <a
          href="/cv_bts.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-xl shadow"
        >
          📄 Prévisualiser mon CV
        </a>

        <a
          href="https://www.linkedin.com/in/nolanberhault"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-xl shadow"
        >
          🔗 LinkedIn
        </a>
      </div>
    </motion.div>
  );
};

export default About;
