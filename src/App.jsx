import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NotFound from "./pages/not_found";
import MobileScroll from "./pages/MobileScroll";

function App() {
  // Mobile + tablette : largeur < 1024px
  const isMobile = window.innerWidth < 1024;

  return (
    <Router>
      <NavBar />

      {isMobile ? (
        // 👉 Sur mobile : scroll continu
        <MobileScroll />
      ) : (
        // 👉 Sur ordinateur : navigation classique
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}

      <Footer />
    </Router>
  );
}

export default App;
