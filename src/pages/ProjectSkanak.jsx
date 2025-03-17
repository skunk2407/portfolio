import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLink, FaTrophy, FaPlug, FaCoins, FaUsers, FaRegHandshake } from "react-icons/fa";

const ProjectSkanak = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      {/* Header animé */}
      <motion.header
        className="fixed top-0 left-0 w-full bg-gray-800 p-4 text-center shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setShowHeader(true)}
        onMouseLeave={() => setShowHeader(false)}
      >
        <h1 className="text-xl font-bold">Projet Perso - Bot Discord : Skanak</h1>
      </motion.header>

      {/* Titre du projet */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Skanak - Le Bot Discord Personnalisé 🚀
      </motion.h1>

      {/* Description du projet */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg max-w-4xl text-center mb-6"
      >
        Skanak est un bot Discord personnalisé pour un serveur unique. Il offre un système économique avec une boutique virtuelle, des commandes amusantes, la gestion des rôles et des messages de bienvenue. Facile à configurer, il permet aussi d’enregistrer les anniversaires des membres et d’automatiser certaines tâches du serveur.
      </motion.p>

      {/* Screenshots */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <motion.img
          src="/screenshots/skanak-screenshot-1.png"
          alt="Portail des Développeurs Discord"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/screenshots/skanak-screenshot-2.png"
          alt="Attribution de Rôles"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <motion.img
          src="/screenshots/skanak-screenshot-3.png"
          alt="Mèmes Automatiques"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/screenshots/skanak-screenshot-4.png"
          alt="Message de Bienvenue"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <motion.img
          src="/screenshots/skanak-screenshot-5.png"
          alt="Système Économique"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/screenshots/skanak-screenshot-6.png"
          alt="Comptage"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>

      {/* Fonctionnalités principales */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full text-left mt-6"
      >
        <h3 className="text-2xl font-semibold mb-3">Fonctionnalités principales :</h3>
        <ul className="list-disc list-inside text-lg">
          <li><FaPlug className="inline-block text-yellow-400 mr-2" /> Portail des Développeurs Discord pour gérer et configurer le bot.</li>
          <li><FaUsers className="inline-block text-blue-400 mr-2" /> Système d'attribution de rôles facile via des boutons interactifs.</li>
          <li><FaTrophy className="inline-block text-purple-400 mr-2" /> Système d'envoi de mèmes automatiques pour divertir les membres.</li>
          <li><FaRegHandshake className="inline-block text-green-400 mr-2" /> Message de bienvenue automatique pour chaque nouveau membre.</li>
          <li><FaCoins className="inline-block text-yellow-300 mr-2" /> Système économique basé sur une monnaie virtuelle "cheeses".</li>
          <li><FaLink className="inline-block text-blue-500 mr-2" /> Comptage interactif entre membres pour renforcer la communauté.</li>
        </ul>
      </motion.div>

      {/* Lien vers le code source */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mt-8"
      >
        <a
          href="https://github.com/skunk2407/Skanak"
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

export default ProjectSkanak;
