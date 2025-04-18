import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectStage from "./pages/ProjectStage";
import ProjectE6 from "./pages/ProjectE6";
import ProjectSkanak from "./pages/ProjectSkanak";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import VeilleTechnologique from "./pages/VeilleTechnologique";


const pageVariants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.6 } },
  exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.5 } },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 120px)", // J'ai ajusté ici pour ne pas faire déborder le footer
          paddingTop: "60px", // Si tu veux garder un espace entre le header et le contenu
          backgroundColor: "#121212",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/projets/e5" element={<ProjectStage />} />
          <Route path="/projets/e6" element={<ProjectE6 />} />
          <Route path="/projets/perso" element={<ProjectSkanak />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/veille" element={<VeilleTechnologique />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  const location = useLocation();
  // Cacher le footer pour les pages projets spécifiques
  const hideFooter = ["/projets/e5", "/projets/e6", "/projets/perso"].includes(location.pathname);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#121212",
      overflowX: "hidden",
    }}>
      {/* Le Header est toujours visible */}
      <Header />
      <div style={{ flexGrow: 1 }}>
        <AnimatedRoutes />
      </div>
      {/* Le Footer est conditionnel */}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
