import React from "react";
import { motion } from "framer-motion";

const VeilleTechnologique = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="/screenshots/Veille.jpeg"
        alt="Bannière Unreal Engine"
        className="w-full h-auto rounded-2xl shadow-lg mb-8 object-cover"
      />

      <h1 className="text-4xl font-bold mb-6 text-center text-white">Veille Technologique - Unreal Engine</h1>

      <p className="mb-6 text-lg text-gray-300">
        Dans le cadre de ma veille technologique pour le BTS SIO, j'ai choisi de suivre l'évolution d’<strong>Unreal Engine</strong>, moteur de jeu développé par Epic Games...
      </p>

      <h2 className="text-2xl font-semibold text-white mt-10 mb-4">🛠️ Outils utilisés pour la veille</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong>Blog officiel :</strong>{" "}
          <a
            href="https://www.unrealengine.com/en-US/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Unreal Engine Blog
          </a>
        </li>
        <li>
          <strong>Forums :</strong>{" "}
          <a
            href="https://forums.unrealengine.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Unreal Engine Community
          </a>
        </li>
        <li>
          <strong>Twitter :</strong>{" "}
          <a
            href="https://twitter.com/UnrealEngine"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            @UnrealEngine
          </a>{" "}
          et{" "}
          <a
            href="https://twitter.com/EpicGames"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            @EpicGames
          </a>
        </li>
        <li>
          <strong>YouTube :</strong>{" "}
          <a
            href="https://www.youtube.com/user/UnrealDevelopmentKit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Unreal Engine Channel
          </a>{" "}
          et{" "}
          <a
            href="https://www.youtube.com/user/VirtusEdu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Virtus Learning Hub
          </a>
        </li>
        <li>
          <strong>Discord & communautés de développeurs :</strong> échanges, sessions live, entraide.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-10 mb-4">📊 Résultats et observations</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Introduction du <strong>ray tracing temps réel</strong> et d’outils de modélisation avancés.</li>
        <li>Projets variés allant du jeu vidéo à la cinématographie, en passant par la réalité virtuelle.</li>
        <li>Une communauté de développeurs active, avec un fort partage de ressources et de techniques.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-10 mb-4">✅ Conclusion</h2>
      <p className="text-gray-300 mb-6">
        Cette veille m’a permis de rester informé sur les dernières évolutions d’Unreal Engine, d’explorer ses nombreuses possibilités d’application et de m’intégrer à une communauté de passionnés. Ces connaissances me seront précieuses pour ma future carrière en développement, notamment dans le domaine du jeu vidéo.
      </p>

      <div className="text-center mt-12">
      <a
  href="/documents/veille_unreal_engine.pdf"
  download
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow transition"
>
  📄 Télécharger le PDF complet
</a>
      </div>
    </motion.div>
  );
};

export default VeilleTechnologique;
