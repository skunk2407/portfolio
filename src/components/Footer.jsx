import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isHidden = ["/projets/e5", "/projets/e6", "/projets/perso"].includes(location.pathname);

  if (isHidden) return null;

  return (
    <footer className="bg-gray-800 text-center py-4 w-full opacity-100">
      <p className="text-gray-400">© 2025 Nolan Berhault - Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;  {/* Ajoute cette ligne */}
