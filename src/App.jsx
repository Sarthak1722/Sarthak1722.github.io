import { useState } from "react";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Footer from "./sections/Footer";
import LoadingScreen from "./components/LoadingScreen";

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
        <Footer />
      </div>
    </>
  );
}

export default App;
