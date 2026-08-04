import { useState } from "react";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import BeyondCode from "./sections/BeyondCode";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Soundscape from "./components/Soundscape";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
        <BeyondCode />
        <Contact />
        <Footer />
        <Soundscape />
      </div>
    </>
  );
}

export default App;
