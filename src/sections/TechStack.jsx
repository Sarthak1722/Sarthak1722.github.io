import React from "react";

const skills = [
  // Languages
  { 
    name: "Golang", 
    description: "High-throughput microservices, API engineering & Kafka pipelines.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#00ADD8" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="42" fill="#FFFFFF" textAnchor="middle">GO</text></svg>) 
  },
  { 
    name: "Python", 
    description: "Multimodal AI fine-tuning, Pandas/NumPy processing & backend APIs.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#3776AB" /><text x="50" y="65" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="30" fill="#FFE873" textAnchor="middle">Py</text></svg>) 
  },
  { 
    name: "C++", 
    description: "Algorithms, structural problem solving & high-performance code.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#00599C" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="38" fill="#FFFFFF" textAnchor="middle">C++</text></svg>) 
  },
  { 
    name: "TypeScript", 
    description: "Type-safe modern web application & API engineering.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#3178C6" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#FFFFFF" textAnchor="middle">TS</text></svg>) 
  },
  { 
    name: "JavaScript", 
    description: "Core web interactive logic, DOM manipulation & async operations.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#F7DF1E" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#000000" textAnchor="middle">JS</text></svg>) 
  },
  { 
    name: "SQL", 
    description: "Relational database schema modeling, queries & indexing.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#F29111" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="38" fill="#FFFFFF" textAnchor="middle">SQL</text></svg>) 
  },

  // Frameworks
  { 
    name: "React.js", 
    description: "Interactive component architecture & dynamic state management.",
    icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="none"><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.2" /><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.2" /><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.2" /><circle cx="12" cy="12" r="1.2" fill="#61DAFB" /></svg>) 
  },
  { 
    name: "Express.js", 
    description: "Fast, robust REST APIs & custom server-side middleware.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#353535" /><text x="50" y="65" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="34" fill="#FFFFFF" textAnchor="middle">EXP</text></svg>) 
  },
  { 
    name: "Next.js", 
    description: "Full-stack React framework with SSR, routing & SEO optimization.",
    icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FFFFFF"><circle cx="12" cy="12" r="12" fill="#000000" /><path d="M17.5 17.5L9.5 8h-1.5v8h1.5v-5.5l8 9.5h0z" fill="#FFFFFF" /><rect x="15" y="8" width="1.5" height="8" fill="#FFFFFF" /></svg>) 
  },
  { 
    name: "Flask", 
    description: "Lightweight Python microservices & rapid REST API development.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#000000" /><text x="50" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="36" fill="#FFFFFF" textAnchor="middle">Flk</text></svg>) 
  },
  { 
    name: "Django", 
    description: "Enterprise Python web applications with built-in ORM & admin.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#092E20" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="48" fill="#52B788" textAnchor="middle">dj</text></svg>) 
  },
  { 
    name: "FastAPI", 
    description: "Modern, high-performance async Python APIs with automatic docs.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#059669" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="34" fill="#FFFFFF" textAnchor="middle">FAST</text></svg>) 
  },

  // Technologies
  { 
    name: "Socket.io", 
    description: "Real-time, bi-directional event-driven websocket communications.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#010101" /><text x="50" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="30" fill="#FFFFFF" textAnchor="middle">S.IO</text></svg>) 
  },
  { 
    name: "MongoDB", 
    description: "NoSQL document schema design, indexing & aggregation queries.",
    icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#47A248"><path d="M12 0C7.2 0 6 4.8 6 9.6c0 4.8 4.8 9.6 6 14.4 1.2-4.8 6-9.6 6-14.4C18 4.8 16.8 0 12 0zm0 17.6c-1.8 0-3-1.8-3-4.2s1.2-4.2 3-4.2 3 1.8 3 4.2-1.2 4.2-3 4.2z" /></svg>) 
  },
  { 
    name: "Git", 
    description: "Distributed version control, collaborative branching & merge workflows.",
    icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#F05032"><path d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L8.1 4.2l3.2 3.2c.8-.3 1.8-.1 2.4.6.6.6.8 1.5.5 2.3l3.2 3.2c.8-.3 1.8-.1 2.4.6.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.6-.6-.8-1.5-.5-2.3l-3.2-3.2c-.3.3-.7.5-1.2.5-.5 0-.9-.2-1.2-.5-.5 0-.9-.2-1.2-.5-.6-.6-.8-1.5-.5-2.3L7.1 9.1c-.8.3-1.8.1-2.4-.6-.8-.8-.8-2.1 0-2.9s2.1-.8 2.9 0c.6.6.8 1.5.5 2.3l3.2 3.2c.3-.3.7-.5 1.2-.5.5 0 .9.2 1.2.5z" /></svg>) 
  },
  { 
    name: "Kubernetes", 
    description: "Orchestration, automated scaling & container scheduling.",
    icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#326CE5"><path d="M12 3.65l8.77 5.06v10.12L12 23.9l-8.77-5.07V8.71L12 3.65zm0 2.3l-6.77 3.9v7.8l6.77 3.9 6.77-3.9v-7.8L12 5.95z" /></svg>) 
  },
  { 
    name: "AWS", 
    description: "Cloud infrastructure deployment, EC2 virtual servers & hosting.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#FF9900" /><text x="50" y="68" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="38" fill="#000000" textAnchor="middle">AWS</text></svg>) 
  },
  { 
    name: "Kafka", 
    description: "Distributed event streaming for high-throughput real-time pipelines.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#231F20" /><text x="50" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="36" fill="#FFFFFF" textAnchor="middle">KFK</text></svg>) 
  },
  { 
    name: "Docker", 
    description: "Containerizing services for consistent developer & cloud runs.",
    icon: (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="#2496ED"><path d="M13.983 8.871h-1.996V6.886h1.996v1.985zM11.51 8.871H9.513V6.886h1.997v1.985zm-2.473 0H7.04V6.886h1.997v1.985zm-2.473 0H4.567V6.886h1.997v1.985zm4.946-2.464H9.513V4.422h1.997v1.985zM8.04 4.422H6.043v1.985H8.04V4.422zm4.946 0h-1.996v1.985h1.996V4.422zm-4.946 0H6.043v1.985H8.04V4.422zm9.18 4.449c0-.056-.008-.109-.011-.165-.015-.226-.046-.445-.101-.659-.06-.237-.154-.46-.282-.663-.127-.2-.294-.378-.492-.51-.237-.156-.503-.257-.793-.298-.2-.029-.404-.038-.609-.029v1.985l2.288.34zM22.304 8.056c-.524-.741-1.398-1.127-2.316-1.127h-.29v2.247c.189.008.381.018.571.042.318.037.608.136.87.31.25.166.442.385.57.653.118.25.176.518.176.793 0 1.05-.851 1.905-1.902 1.905H1.424C.638 12.879 0 13.517 0 14.303v.29c0 4.385 3.563 7.948 7.948 7.948h8.809c4.385 0 7.948-3.563 7.948-7.948v-.29c0-2.378-1.048-4.509-2.705-5.943l.304-.294z" /></svg>) 
  },
  { 
    name: "Postgres", 
    description: "Enterprise SQL database tables, complex triggers & transaction safety.",
    icon: (<svg viewBox="0 0 100 100" className="w-5 h-5"><rect width="100" height="100" rx="15" fill="#336791" /><text x="50" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="34" fill="#FFFFFF" textAnchor="middle">PSQL</text></svg>) 
  }
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
              className="group relative flex items-center gap-3 px-5 py-2.5 bg-[#09090b]/80 hover:bg-[#121216] border border-[#232329] hover:border-yellow-400/40 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
            >
              <div className="w-5.5 h-5.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-sm font-semibold tracking-wide text-gray-500 group-hover:text-white transition-colors duration-300 uppercase select-none">
                {skill.name}
              </span>

              {/* Sleek CSS tooltips */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 w-56 p-3 bg-zinc-950/95 border border-zinc-800 text-[11px] text-gray-300 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-30 shadow-2xl backdrop-blur-md text-center leading-relaxed font-normal normal-case">
                {skill.description}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-zinc-950/95" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
