import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50 opacity-100 transition-opacity">
      <div className="w-full flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-green-400 ml-6">PORTFOLIO</h1>
        <nav>
          <ul className="flex space-x-6 mr-6">
            <li><Link to="/" className="text-green-400 hover:underline">Accueil</Link></li>
            <li><Link to="/about" className="text-green-400 hover:underline">À Propos</Link></li>
            <li><Link to="/projects" className="text-green-400 hover:underline">Projets</Link></li>
            <li><Link to="/contact" className="text-green-400 hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
