import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./Projects"
import Adventures from "./Adventures"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
  
  <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-green-300 selection:text-green-900">

    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>

    <div className="container mx-auto px-8">
      <Navbar />
      <div className="-mt-20"> <Hero /> </div>
      <Experience />
      <Contact />
      <Technologies />
      
    </div>
    
  </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/adventures" element={<Adventures />} />
      </Routes>
    </Router>
  );
};

export default App
