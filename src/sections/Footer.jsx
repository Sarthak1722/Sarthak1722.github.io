import { useEffect, useRef } from "react";

const Footer = () => {
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    const pupilStartPoint = -10;
    const pupilRangeX = 20;
    const pupilRangeY = 15;

    let mouseXEndPoint = window.innerWidth;
    let mouseYEndPoint = window.innerHeight;

    const handleMouseMove = (e) => {
      const currentXPosition = e.clientX;
      const fracXValue = currentXPosition / mouseXEndPoint;

      const currentYPosition = e.clientY;
      const fracYValue = currentYPosition / mouseYEndPoint;

      const pupilX = pupilStartPoint + fracXValue * pupilRangeX;
      const pupilY = pupilStartPoint + fracYValue * pupilRangeY;

      if (leftPupilRef.current) {
        leftPupilRef.current.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      }
      if (rightPupilRef.current) {
        rightPupilRef.current.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      }
    };

    const handleResize = () => {
      mouseXEndPoint = window.innerWidth;
      mouseYEndPoint = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="main-footer">
      {/* Footer background blob */}
      <div className="footer-background">
        <div className="footer-blob"></div>
      </div>

      {/* Footer contents */}
      <div className="footer-foreground w-full">
        <div className="max-w-7xl mx-auto w-full h-full relative md:px-10 px-5 flex flex-col justify-between">
          {/* Back to Top Button */}
          <button className="backtotopbutton" onClick={scrollToTop}>
            <article aria-label="Back to top">&#8592; BACK TO TOP</article>
          </button>

          <div className="footercontainer w-full h-full relative">
            <div className="footer-avatar-container">
              {/* Bitmoji overlay head (higher z-index, transparent eyes) */}
              <img
                src="/images/Sarthak_Bitmoji.png"
                alt="animation-head"
                className="footer-avatar-img"
                id="footer-wala-avatar"
              />
              {/* Moving pupils behind (lower z-index) */}
              <div className="footer-avatar-face">
                <div className="footer-avatar-eye footer-left-eye">
                  <div ref={leftPupilRef} className="footer-pupil"></div>
                </div>
                <div className="footer-avatar-eye footer-right-eye">
                  <div ref={rightPupilRef} className="footer-pupil"></div>
                </div>
              </div>
            </div>

            <div className="footer-bottom flex flex-col gap-2">
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                <a href="mailto:sarthakfulzele2209@gmail.com" className="hover:text-yellow-400 transition-colors">
                  Email
                </a>
                <span>•</span>
                <a href="https://github.com/Sarthak" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                  GitHub
                </a>
                <span>•</span>
                <a href="https://www.linkedin.com/in/Sarthak-Fulzele" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                  LinkedIn
                </a>
                <span>•</span>
                <a href="tel:+917721930950" className="hover:text-yellow-400 transition-colors">
                  +91-7721930950
                </a>
              </div>
              <p className="text-sm text-gray-500 font-medium">
                © {new Date().getFullYear()} Sarthak Fulzele. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
