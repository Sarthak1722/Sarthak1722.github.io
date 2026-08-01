import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";
import { navLinks } from "../constants";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Fallback on tablets & mobile
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Background gradients and blur effect */}
      <img className="image-gradient" src="/gradient.png" alt="gradient" />
      <div className="layer-blur"></div>

      <div className="hero-container w-full">
        {/* Header */}
        <header className="hero-header w-full">
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center md:px-10 px-5">
            <h1 data-aos="fade-down" data-aos-duration="1500" className="logo font-light text-white">
              SARTHAK
            </h1>

            <nav>
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  data-aos="fade-down"
                  data-aos-duration={1500 + idx * 500}
                  href={link.link}
                  className="text-white font-medium hover:text-gray-400"
                >
                  {link.name.toUpperCase()}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              data-aos="fade-down"
              data-aos-duration="1500"
              className="btn-signing flex items-center justify-center text-center no-underline"
            >
              SAY HELLO
            </a>
          </div>
        </header>

        {/* Main Section */}
        <main className="hero-main w-full">
          <div className="max-w-7xl mx-auto w-full md:px-10 px-5 relative min-h-[70vh] flex flex-col justify-center">
            <div className="hero-content z-20">
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="1500"
                className="tag-box"
              >
                <div className="tag text-white">INTRODUCING ⩟</div>
              </div>

              <h1
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="2000"
                className="text-white"
              >
                ENGINEERING FOR
                <br />
                CREATIVE MINDS
              </h1>

              <p
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="2500"
                className="hero-description"
              >
                Hi, I'm Sarthak Fulzele. I build interactive 3D web applications, full-stack architectures, and high-performance digital experiences. Welcome to my autobiography.
              </p>

              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="3000"
                className="hero-buttons"
              >
                <a href="#work" className="btn-get-started text-white">
                  Projects &gt;
                </a>
                <a href="#skills" className="btn-signing-main">
                  Skills &gt;
                </a>
              </div>
            </div>

            {/* 3D Robot Spline Scene */}
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="3000"
              className="robot-3d"
              style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)' }}
            >
              {!isMobile ? (
                <Spline scene="https://prod.spline.design/Qr2knMM4aKElH8x7/scene.splinecode" />
              ) : (
                <div className="w-full h-full min-h-[300px] flex items-center justify-center relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c0a12] to-[#040306] border border-white/5 shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1)_0%,transparent_60%)] pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center gap-3 p-6 text-center text-zinc-400">
                    <div className="w-12 h-12 rounded-full bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-xl text-violet-400">
                      ⚡
                    </div>
                    <p className="text-sm font-semibold text-white uppercase tracking-wider">Creative Engineering</p>
                    <p className="text-xs max-w-[200px]">Full-Stack Web Dev & 3D Interactive Design</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
