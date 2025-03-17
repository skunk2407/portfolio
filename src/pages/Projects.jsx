import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  { title: "Projet de Stage (E5)", path: "/projets/e5" },
  { title: "Projet E6", path: "/projets/e6" },
  { title: "Projet Perso", path: "/projets/perso" },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
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
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 max-w-6xl"
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
    </div>
  );
};

export default Projects;
