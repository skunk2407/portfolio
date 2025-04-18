import React from "react";
import { motion } from "framer-motion";

const Legal = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full bg-gray-800 p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-6 text-yellow-400">Mentions Légales</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Éditeur du site</h2>
          <p className="text-gray-300">
            Ce site est édité par <strong>Nolan Berhault</strong>, étudiant en BTS SIO option SLAM.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Hébergement</h2>
          <p className="text-gray-300">
            Le site est hébergé sur GitHub Pages ou tout autre service choisi par l’auteur. 
            Aucune donnée personnelle n’est collectée.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Propriété intellectuelle</h2>
          <p className="text-gray-300">
            Tous les contenus présents sur le site (textes, images, projets) sont la propriété exclusive de Nolan Berhault, sauf mention contraire.
            Toute reproduction, représentation, ou diffusion sans autorisation est interdite.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Contact</h2>
          <p className="text-gray-300">
            Pour toute question ou remarque, vous pouvez me contacter via la page <a href="/contact" className="text-blue-400 underline">Contact</a>.
          </p>
        </section>

        <p className="text-xs text-gray-500 text-right">Dernière mise à jour : Avril 2025</p>
      </motion.div>
    </div>
  );
};

export default Legal;
