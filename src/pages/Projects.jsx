import React from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom"; // ajout de Link ici

const projects = [
  { title: "Projet de Stage (E5)", path: "/projets/e5" },
  { title: "Projet E6", path: "/projets/e6" },
  { title: "Projet Perso", path: "/projets/perso" },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 bg-gray-900 text-white">
      {/* Titre en fondu */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-8"
      >
        Répertoire des projets
      </motion.h1>

      {/* Conteneur des projets */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 max-w-6xl mb-12"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(project.path)}
            className="cursor-pointer bg-gray-800 text-white p-6 rounded-lg shadow-lg flex items-center justify-center text-xl font-semibold hover:bg-gray-700 transition-all"
          >
            {project.title}
          </motion.div>
        ))}
      </motion.div>

      {/* Veille Technologique */}
      <div className="w-11/12 max-w-4xl bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded shadow text-black">
        <h3 className="text-2xl font-semibold mb-3">🧠 Veille Technologique</h3>
        <p className="mb-4">
          Dans le cadre de ma veille technologique, je me suis intéressé à <strong>Unreal Engine</strong>. 
          Cet outil de développement de jeux vidéo est de plus en plus utilisé dans l'industrie, 
          notamment pour ses performances en rendu temps réel, sa compatibilité multiplateforme 
          et son moteur graphique puissant.
        </p>
        <Link
          to="/veille"
          className="inline-block text-blue-600 underline font-medium hover:text-blue-800"
        >
          📄 Lire le document complet
        </Link>
      </div>
    </div>
  );
};

export default Projects;
