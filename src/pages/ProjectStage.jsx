import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaCalendar, FaUser, FaMapMarkerAlt, FaLink, FaBuilding } from "react-icons/fa";

const ProjectStage = () => {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <div className="min-h-screen h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">

      {/* Titre du projet */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Projet de Stage : Automatisation de la Gestion des Backlinks
      </motion.h1>

      {/* Entreprise */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full text-center mb-6"
      >
        <h2 className="text-2xl font-semibold mb-2">Entreprise : À Vous Le Web (AVLW)</h2>
        <p className="text-lg">Stage réalisé chez <strong>À Vous Le Web</strong>, une agence spécialisée dans la conception de sites web au Rheu.</p>
        <div className="flex items-center justify-center gap-3 mt-3">
          <FaBuilding className="text-yellow-400 text-2xl" />
          <span className="text-lg">Localisation : Le Rheu, France</span>
        </div>
        <div className="flex items-center justify-center gap-3 mt-2">
          <FaUser className="text-green-400 text-2xl" />
          <span className="text-lg">Maître de stage : Luc PAGE</span>
        </div>
      </motion.div>

      {/* Screenshots */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <motion.img
          src="/portfolio/screenshots/projet-stage-1.png"
          alt="Screenshot 1"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/portfolio/screenshots/projet-stage-2.png"
          alt="Screenshot 2"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>

      {/* Description du projet */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg max-w-4xl text-center mb-6"
      >
        Ce projet vise à automatiser la récupération, l’analyse et la notification des nouveaux backlinks détectés via Google Search Console pour plusieurs sites web.
        L’automatisation comprend le téléchargement des rapports, la comparaison des liens et l’envoi de notifications via email.
      </motion.p>

      {/* Missions du stage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full text-left mt-6"
      >
        <h3 className="text-2xl font-semibold mb-3">Missions du stage :</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Automatisation de l'extraction des backlinks via Google Search Console</li>
          <li>Développement de scripts Python pour comparer les backlinks</li>
          <li>Transmission des résultats via un serveur SMTP</li>
          <li>Intégration d'API et automatisation des flux</li>
          <li>Mise en place d'un système de planification des tâches</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mt-8"
      >
        <a
          href="https://gitlab.com/aftec3/projet-stage-2025"
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

export default ProjectStage;
