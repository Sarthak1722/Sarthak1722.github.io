import React from "react";

const skills = [
  {
    name: "HTML",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.9 21.5-8.6 2.5-8.6-2.5L1.5 0zm17 5.6H7.5l.3 3.1h10.5l-.6 6.3-5.7 1.4-5.8-1.4-.4-4.2h3.1l.2 2.1 2.9.8 2.9-.8.3-3.6H4.3l-.9-10h17.3l-.6 5.6z" fill="#E34F26" />
      </svg>
    ),
  },
  { name: "CSS", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.9 21.5-8.6 2.5-8.6-2.5L1.5 0zm17 5.6H7.5l.3 3.1h10.5l-.6 6.3-5.7 1.4-5.8-1.4-.4-4.2h3.1l.2 2.1 2.9.8 2.9-.8.3-3.6H7l-.3-3.1h11.8z" fill="#1572B6" /></svg>) },
  { name: "TailwindCSS", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#38BDF8"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3.9 1.2 0 2.2-.6 3-1.8C14.701 5.7 13.5 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3.9 1.2 0 2.2-.6 3-1.8.8-1.2-.4-2.1-1.9-2.1z" /></svg>) },
  { name: "JavaScript", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#F7DF1E" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#000000" textAnchor="middle">JS</text></svg>) },
  { name: "TypeScript", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#3178C6" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#FFFFFF" textAnchor="middle">TS</text></svg>) },
  { name: "React", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="none"><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.2" /><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.2" /><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.2" /><circle cx="12" cy="12" r="1.2" fill="#61DAFB" /></svg>) },
  { name: "Redux", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#764ABC" /><text x="50" y="65" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="38" fill="#FFFFFF" textAnchor="middle">Rx</text></svg>) },
  { name: "Nodejs", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#339933"><path d="M12 1.5a10.5 10.5 0 00-6.7 2.4l4.5 4.5a4 4 0 014.4 0l4.5-4.5A10.5 10.5 0 0012 1.5zm6.8 4.3l-4.5 4.5a4 4 0 010 4.4l4.5 4.5A10.5 10.5 0 0018.8 5.8z" /></svg>) },
  { name: "Nextjs", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FFFFFF"><circle cx="12" cy="12" r="12" fill="#000000" /><path d="M17.5 17.5L9.5 8h-1.5v8h1.5v-5.5l8 9.5h0z" fill="#FFFFFF" /><rect x="15" y="8" width="1.5" height="8" fill="#FFFFFF" /></svg>) },
  { name: "Django", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#092E20" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#52B788" textAnchor="middle">dj</text></svg>) },
  { name: "MongoDB", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#47A248"><path d="M12 0C7.2 0 6 4.8 6 9.6c0 4.8 4.8 9.6 6 14.4 1.2-4.8 6-9.6 6-14.4C18 4.8 16.8 0 12 0zm0 17.6c-1.8 0-3-1.8-3-4.2s1.2-4.2 3-4.2 3 1.8 3 4.2-1.2 4.2-3 4.2z" /></svg>) },
  { name: "MySQL", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#00758F"><path d="M12 3a9 9 0 00-9 9c0 2.5 1 4.8 2.7 6.4L7 17a7 7 0 1110 0l1.3 1.4A9 9 0 0012 3zm0 3a6 6 0 100 12c.8 0 1.6-.2 2.3-.5l1.4 1.4A8 8 0 1112 4z" /></svg>) },
  { name: "PostgreSQL", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#336791" /><text x="50" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="34" fill="#FFFFFF" textAnchor="middle">PSQL</text></svg>) },
  { name: "Prisma", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#2D3748"><path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z" /></svg>) },
  { name: "Redis", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#D82C20"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" /></svg>) },
  { name: "Postman", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#FF6C37" /><text x="50" y="64" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fill="#FFFFFF" textAnchor="middle">PM</text></svg>) },
  { name: "Zod", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#3E3E3E" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#3178C6" textAnchor="middle">Z</text></svg>) },
  { name: "Python", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#3776AB" /><text x="50" y="65" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="30" fill="#FFE873" textAnchor="middle">Py</text></svg>) },
  { name: "C++", icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#00599C" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="38" fill="#FFFFFF" textAnchor="middle">C++</text></svg>) },
  { name: "Git", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#F05032"><path d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L8.1 4.2l3.2 3.2c.8-.3 1.8-.1 2.4.6.6.6.8 1.5.5 2.3l3.2 3.2c.8-.3 1.8-.1 2.4.6.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.6-.6-.8-1.5-.5-2.3l-3.2-3.2c-.3.3-.7.5-1.2.5-.5 0-.9-.2-1.2-.5-.6-.6-.8-1.5-.5-2.3L7.1 9.1c-.8.3-1.8.1-2.4-.6-.8-.8-.8-2.1 0-2.9s2.1-.8 2.9 0c.6.6.8 1.5.5 2.3l3.2 3.2c.3-.3.7-.5 1.2-.5.5 0 .9.2 1.2.5z" /></svg>) },
  { name: "GitHub", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FFFFFF"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>) },
  { name: "Docker", icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#2496ED"><path d="M13.983 8.871h-1.996V6.886h1.996v1.985zM11.51 8.871H9.513V6.886h1.997v1.985zm-2.473 0H7.04V6.886h1.997v1.985zm-2.473 0H4.567V6.886h1.997v1.985zm4.946-2.464H9.513V4.422h1.997v1.985zM8.04 4.422H6.043v1.985H8.04V4.422zm4.946 0h-1.996v1.985h1.996V4.422zm-4.946 0H6.043v1.985H8.04V4.422zm9.18 4.449c0-.056-.008-.109-.011-.165-.015-.226-.046-.445-.101-.659-.06-.237-.154-.46-.282-.663-.127-.2-.294-.378-.492-.51-.237-.156-.503-.257-.793-.298-.2-.029-.404-.038-.609-.029v1.985l2.288.34zM22.304 8.056c-.524-.741-1.398-1.127-2.316-1.127h-.29v2.247c.189.008.381.018.571.042.318.037.608.136.87.31.25.166.442.385.57.653.118.25.176.518.176.793 0 1.05-.851 1.905-1.902 1.905H1.424C.638 12.879 0 13.517 0 14.303v.29c0 4.385 3.563 7.948 7.948 7.948h8.809c4.385 0 7.948-3.563 7.948-7.948v-.29c0-2.378-1.048-4.509-2.705-5.943l.304-.294z" /></svg>) },
];

const TechStack = () => {
  return (
    <div id="skills" className="flex justify-center items-center py-20 w-full relative">
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
