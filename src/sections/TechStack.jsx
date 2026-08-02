import React from "react";

const skills = [
  // Languages
  { name: "Golang", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#00ADD8" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="42" fill="#FFFFFF" textAnchor="middle">GO</text></svg>) },
  { name: "Python", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#3776AB" /><text x="50" y="65" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="30" fill="#FFE873" textAnchor="middle">Py</text></svg>) },
  { name: "C++", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#00599C" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="38" fill="#FFFFFF" textAnchor="middle">C++</text></svg>) },
  { name: "TypeScript", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#3178C6" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#FFFFFF" textAnchor="middle">TS</text></svg>) },
  { name: "JavaScript", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#F7DF1E" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#000000" textAnchor="middle">JS</text></svg>) },
  { name: "SQL", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#F29111" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="38" fill="#FFFFFF" textAnchor="middle">SQL</text></svg>) },

  // Frameworks
  { name: "React.js", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="none"><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.2" /><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.2" /><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.2" /><circle cx="12" cy="12" r="1.2" fill="#61DAFB" /></svg>) },
  { name: "Express.js", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#353535" /><text x="50" y="65" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="34" fill="#FFFFFF" textAnchor="middle">EXP</text></svg>) },
  { name: "Next.js", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FFFFFF"><circle cx="12" cy="12" r="12" fill="#000000" /><path d="M17.5 17.5L9.5 8h-1.5v8h1.5v-5.5l8 9.5h0z" fill="#FFFFFF" /><rect x="15" y="8" width="1.5" height="8" fill="#FFFFFF" /></svg>) },
  { name: "Flask", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#000000" /><text x="50" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="36" fill="#FFFFFF" textAnchor="middle">Flk</text></svg>) },
  { name: "Django", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#092E20" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#52B788" textAnchor="middle">dj</text></svg>) },
  { name: "FastAPI", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#059669" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="34" fill="#FFFFFF" textAnchor="middle">FAST</text></svg>) },

  // Technologies
  { name: "Socket.io", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#010101" /><text x="50" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="30" fill="#FFFFFF" textAnchor="middle">S.IO</text></svg>) },
  { name: "MongoDB", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#47A248"><path d="M12 0C7.2 0 6 4.8 6 9.6c0 4.8 4.8 9.6 6 14.4 1.2-4.8 6-9.6 6-14.4C18 4.8 16.8 0 12 0zm0 17.6c-1.8 0-3-1.8-3-4.2s1.2-4.2 3-4.2 3 1.8 3 4.2-1.2 4.2-3 4.2z" /></svg>) },
  { name: "Git", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#F05032"><path d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L8.1 4.2l3.2 3.2c.8-.3 1.8-.1 2.4.6.6.6.8 1.5.5 2.3l3.2 3.2c.8-.3 1.8-.1 2.4.6.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.6-.6-.8-1.5-.5-2.3l-3.2-3.2c-.3.3-.7.5-1.2.5-.5 0-.9-.2-1.2-.5-.6-.6-.8-1.5-.5-2.3L7.1 9.1c-.8.3-1.8.1-2.4-.6-.8-.8-.8-2.1 0-2.9s2.1-.8 2.9 0c.6.6.8 1.5.5 2.3l3.2 3.2c.3-.3.7-.5 1.2-.5.5 0 .9.2 1.2.5z" /></svg>) },
  { name: "Kubernetes", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#326CE5"><path d="M12 3.65l8.77 5.06v10.12L12 23.9l-8.77-5.07V8.71L12 3.65zm0 2.3l-6.77 3.9v7.8l6.77 3.9 6.77-3.9v-7.8L12 5.95z" /></svg>) },
  { name: "AWS", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#FF9900" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="38" fill="#000000" textAnchor="middle">AWS</text></svg>) },
  { name: "Kafka", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#231F20" /><text x="50" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="36" fill="#FFFFFF" textAnchor="middle">KFK</text></svg>) },
  { name: "Docker", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#2496ED"><path d="M13.983 8.871h-1.996V6.886h1.996v1.985zM11.51 8.871H9.513V6.886h1.997v1.985zm-2.473 0H7.04V6.886h1.997v1.985zm-2.473 0H4.567V6.886h1.997v1.985zm4.946-2.464H9.513V4.422h1.997v1.985zM8.04 4.422H6.043v1.985H8.04V4.422zm4.946 0h-1.996v1.985h1.996V4.422zm-4.946 0H6.043v1.985H8.04V4.422zm9.18 4.449c0-.056-.008-.109-.011-.165-.015-.226-.046-.445-.101-.659-.06-.237-.154-.46-.282-.663-.127-.2-.294-.378-.492-.51-.237-.156-.503-.257-.793-.298-.2-.029-.404-.038-.609-.029v1.985l2.288.34zM22.304 8.056c-.524-.741-1.398-1.127-2.316-1.127h-.29v2.247c.189.008.381.018.571.042.318.037.608.136.87.31.25.166.442.385.57.653.118.25.176.518.176.793 0 1.05-.851 1.905-1.902 1.905H1.424C.638 12.879 0 13.517 0 14.303v.29c0 4.385 3.563 7.948 7.948 7.948h8.809c4.385 0 7.948-3.563 7.948-7.948v-.29c0-2.378-1.048-4.509-2.705-5.943l.304-.294z" /></svg>) },
  { name: "Postgres", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#336791" /><text x="50" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="34" fill="#FFFFFF" textAnchor="middle">PSQL</text></svg>) }
];

const TechStack = () => {
  return (
    <div id="skills" className="flex justify-center items-center py-10 w-full relative">
      <div className="max-w-7xl mx-auto w-full h-full md:px-10 px-5 relative">
        {/* Title Header */}
        <div className="text-left md:mb-10 mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
            Tech Stack
          </h2>
        </div>

        {/* Minimalistic Grid Wrapper */}
        <div className="flex flex-wrap gap-4 justify-start mt-6 w-full">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-3 px-5 py-2.5 bg-[#09090b]/80 hover:bg-[#121216] border border-[#232329] hover:border-yellow-400/40 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
            >
              <div className="w-5.5 h-5.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-sm font-semibold tracking-wide text-gray-500 group-hover:text-white transition-colors duration-300 uppercase select-none">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
