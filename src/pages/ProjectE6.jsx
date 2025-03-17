import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaCalendar, FaUser, FaMapMarkerAlt, FaLink, FaBuilding } from "react-icons/fa";

const ProjectE6 = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  return (
    <div className="min-h-screen h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      {/* Header animé */}
      <motion.header
        className="fixed top-0 left-0 w-full bg-gray-800 p-4 text-center shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setShowHeader(true)}
        onMouseLeave={() => setShowHeader(false)}
      >
        <h1 className="text-xl font-bold">Projet E6 - BTS SIO</h1>
      </motion.header>

      {/* Titre du projet */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Projet E6 : Client Léger et Client Lourd
      </motion.h1>

      {/* Description du projet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full text-center mb-6"
      >
        <h2 className="text-2xl font-semibold mb-2">Présentation des projets</h2>
        <p className="text-lg">
          Ce projet présente deux types d'applications : un client léger (site web) et un client lourd (application de bureau).
        </p>
      </motion.div>

      {/* Projets réalisés */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex flex-col md:flex-row gap-6 mb-8"
      >
        {/* Client Léger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 rounded-lg shadow-lg bg-gray-800 p-4"
        >
          <h3 className="text-xl font-semibold mb-2">Client Léger - Site Web</h3>
          <img
            src="/screenshots/client-leger.png"
            alt="Client Léger"
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg">
            Développement d'un site web pour un club de natation avec gestion des membres et des événements.
          </p>
        </motion.div>

        {/* Client Lourd */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 rounded-lg shadow-lg bg-gray-800 p-4"
        >
          <h3 className="text-xl font-semibold mb-2">Client Lourd - Application de Bureau</h3>
          <img
            src="/screenshots/client-lourd.png"
            alt="Client Lourd"
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg">
            Création d'un mini-jeu où l'utilisateur doit deviner un chiffre grâce à des indices (+/-).
          </p>
        </motion.div>
      </motion.div>

      {/* Accès au code source */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mt-8"
      >
        <a
          href="https://gitlab.com/aftec3/projet-plantuml"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-all"
        >
          <FaLink className="text-white text-2xl" />
          Voir le code source
        </a>
      </motion.div>

    </div>
  );
};

export default ProjectE6;
