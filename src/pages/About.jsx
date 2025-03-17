import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const text = `Passionné par l’informatique et les nouvelles technologies, j’ai toujours aimé comprendre, créer et optimiser.

Actuellement en BTS Services Informatiques aux Organisations (SIO) - option SLAM, je me spécialise dans le développement web et l’automatisation, tout en ayant un fort intérêt pour la cybersécurité.

J’ai eu l’opportunité de travailler sur plusieurs projets concrets, notamment en développement web (JavaScript, HTML, CSS, Python) et en automatisation de tâches via des outils comme Zennoposter et Selenium. Ces expériences m’ont permis de développer un esprit analytique, une capacité à résoudre des problèmes techniques, et une certaine rigueur dans l’optimisation de scripts.

En dehors du code, je suis aussi passionné par l’Histoire, un domaine que j’ai exploré en études supérieures. Le gaming et la musculation occupent également une place importante dans mon quotidien, alliant réflexion et dépassement de soi.

Toujours en quête d’apprentissage, je me projette à long terme dans un métier alliant développement et cybersécurité, avec l’ambition d’apporter des solutions efficaces et sécurisées dans un monde numérique en constante évolution.`;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 25); // Vitesse de l'écriture réduite pour un effet plus fluide
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100"> {/* Ajout d'un fond clair */}
      <motion.h1
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: -100, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 text-black" // Assure que le texte est bien visible
      >
        À propos
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-2xl bg-white p-6 rounded-lg shadow-lg text-lg"
      >
        <p style={{ whiteSpace: "pre-line" }}>{displayedText}</p>
      </motion.div>
    </div>
  );
};

export default About;
