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
          minHeight: "calc(100vh - 60px)", // S'assure que le contenu prend toute la hauteur sans dépasser
          paddingTop: "60px",
          backgroundColor: "#121212", // Remet le fond sombre
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
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  const location = useLocation();
  const hideFooter = ["/projets/e5", "/projets/e6", "/projets/perso"].includes(location.pathname);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#121212", // S'assure que toute la page garde le fond sombre
      overflowX: "hidden", // Évite le scroll horizontal
    }}>
      <Header />
      <div style={{ flexGrow: 1 }}>
        <AnimatedRoutes />
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
