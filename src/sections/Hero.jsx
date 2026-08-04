import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";
import { navLinks } from "../constants";
import ResumeModal from "../components/ResumeModal";

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section id="hero" className="relative w-full overflow-hidden">
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

        {/* Main */}
        <main className="hero-main w-full">
          <div className="hero-inner max-w-7xl mx-auto w-full md:px-10 px-5">

            {/*
              3D Robot — comes FIRST in DOM so it appears at the top
              on mobile/tablet when flex-direction: column is used.
              On desktop it is position: absolute so DOM order doesn't matter.
            */}
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="3000"
              className="robot-3d"
              style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
            >
              {/*
                robot-3d-inner: the actual Spline canvas lives here.
                On mobile, this inner div is taller than its parent (.robot-3d),
                anchored to the bottom, so CSS overflow:hidden clips the empty
                top of the Spline scene and only shows the robot portion.
                On desktop it is width/height: 100% — invisible passthrough.
              */}
              <div className="robot-3d-inner">
                <Spline scene="https://prod.spline.design/Qr2knMM4aKElH8x7/scene.splinecode" />
              </div>
            </div>

            {/* Text Content — comes second so it sits below the robot on mobile */}
            <div className="hero-content z-20">
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="1500"
                className="tag-box"
              >
                <div className="tag text-white">just another human.</div>
              </div>

              <h1
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="2000"
                className="text-white"
                style={{ margin: "0.5rem 0 1.8rem 0", display: "block", overflow: "visible" }}
              >
                <span
                  style={{
                    fontFamily: '"Caveat", cursive',
                    fontSize: "clamp(3.8rem, 9vw, 6.2rem)",
                    fontWeight: "500",
                    textTransform: "none",
                    letterSpacing: "0.01em",
                    transform: "rotate(-3deg)",
                    transformOrigin: "left center",
                    color: "#fff",
                    display: "inline-block",
                  }}
                >
                  hi! i am sarthak
                </span>
              </h1>

              <p
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="2500"
                className="hero-description"
                style={{ textTransform: "none", fontSize: "1.1rem", lineHeight: "1.7" }}
              >
                a mechanical engineer at IIT Kharagpur who spends 99% of his time building voice AI agents,
                real-time music rooms, and scalable microservices instead of doing actual mechanical engineering.
                yes, the cognitive dissonance is real. if you need someone to orchestrate kubernetes pods or
                fine-tune multimodal models while pretending they know how a turbine works, i'm your guy.
              </p>

              {/* Interactive Action Buttons */}
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="400"
                data-aos-offset="0"
                data-aos-duration="2600"
                className="mt-8 flex flex-wrap gap-4 z-30 relative"
              >
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="group flex items-center gap-2.5 px-6 py-3 text-sm font-semibold tracking-wide text-white bg-purple-600/10 hover:bg-purple-600 border border-purple-500/30 hover:border-purple-500 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:-translate-y-0.5 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>Resume</span>
                </button>

                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Let's Connect</span>
                  <span className="text-zinc-500 group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default Hero;
