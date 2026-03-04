import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NotFound from "./pages/not_found";

import MobileScroll from "./pages/MobileScroll";
import useMobile from "./hooks/UseMobile";

function App() {
  const isMobile = useMobile(1024);

  return (
    <Router>
      <NavBar />

      {isMobile ? (
        <MobileScroll />
      ) : (
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      )}

      <Footer />
    </Router>
  );
}

export default App;
