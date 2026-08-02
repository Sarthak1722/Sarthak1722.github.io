import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsProjectsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 } // Trigger when 5% visible to start rendering slightly before it enters screen
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section id="work" ref={sectionRef} className="mt-12 mb-6 w-full">
      <div className="max-w-7xl mx-auto w-full md:px-10 px-5">
        <p className="head-text">My Selected Work</p>

        {/* Unified control console wrapper card */}
        <div 
          className="grid lg:grid-cols-2 grid-cols-1 mt-12 w-full glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black-100/40 backdrop-blur-xl"
          style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)' }}
        >
          {/* Left Side: Project details card */}
          <div className="flex flex-col gap-5 relative sm:p-12 py-10 px-6 justify-between lg:border-r lg:border-white/5 border-b border-white/5 bg-neutral-900/10 order-2 lg:order-1">
            <div className="absolute top-0 right-0 pointer-events-none select-none opacity-20">
              <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
            </div>

            <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-xl" style={currentProject.logoStyle}>
              <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

              <p className="animatedText text-[#839cb5] leading-relaxed">{currentProject.desc}</p>
              <p className="animatedText text-gray-400 text-sm leading-relaxed">{currentProject.subdesc}</p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>

              <a
                className="flex items-center gap-2 cursor-pointer text-zinc-400 hover:text-white transition-colors duration-300 font-medium"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer">
                <p>Check Live Site</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            </div>

            <div className="flex justify-between items-center mt-7">
              <button className="arrow-btn hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300" onClick={() => handleNavigation('previous')}>
                <img src="/assets/left-arrow.png" alt="left arrow" />
              </button>

              <button className="arrow-btn hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300" onClick={() => handleNavigation('next')}>
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side: Computer 3D Viewport / Fallback Showcase */}
          <div className="h-96 lg:h-auto overflow-hidden relative min-h-[450px] flex items-center justify-center bg-black-100/10 order-1 lg:order-2">
            <Canvas frameloop={isProjectsVisible ? "always" : "never"} style={{ touchAction: 'pan-y' }}>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
