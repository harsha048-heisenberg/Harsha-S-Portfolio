"use client"

import { useEffect, useRef, useState } from "react"
import { Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  tools: string[]
  date: string
  codeLink?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Dream Symbol Interpreter",
    description:
      "Project to interpret dreams based on symbols. Developed an AI-Powered Dream Symbol Interpreter using Streamlit, TF-IDF, XGBoost, and Mistral AI",
    tools: ["Streamlit", "TF-IDF", "XGBoost", "Mistral AI"],
    date: "06/2025",
    codeLink: "https://github.com/harshasangur48/Dream-Symbol-Interpreter.git",
  },
  {
    id: 2,
    title: "Bengaluru Flood Risk Dashboard",
    description:
      "Project aimed at assessing flood risk in Bengaluru. Created a Bengaluru Flood Risk Dashboard utilizing Streamlit, Folium, and Random Forest",
    tools: ["Streamlit", "Folium", "Random Forest"],
    date: "06/2025",
    codeLink: "https://github.com/harshasangur48/Bengaluru-Flood-Risk-Dashboard.git",
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description: "Project focused on recommending movies to users. Built using MovieLens20M Dataset and Tkinter",
    tools: ["MovieLens20M", "Tkinter", "Python"],
    date: " 05/2025",
    codeLink: "https://github.com/harshasangur48/Movie-Recommendation-System-Project.git",
  },
  {
    id: 4,
    title: "Secure Data Hiding in Images using Steganography",
    description:
      "Developed steganography technique for message encryption. Implemented a secure data hiding in images using Steganography with Python and OpenCV",
    tools: ["Steganography", "Python", "OpenCV"],
    date: "02/2025",
    codeLink: "https://github.com/harshasangur48/Steganography-Project.git",
  },
  {
    "id": 5,
    "title": "AI-Based Network Intrusion Detection System (NIDS) with Real-Time Monitoring",
    "description": "Engineered a high-performance, real-time Network Intrusion Detection System (NIDS) using a GPU-accelerated XGBoost Classifier. The system is designed to classify network traffic flows (using 78 features) into BENIGN or one of 11 distinct attack classes (e.g., DoS, DDoS, PortScan, Web Attacks). The core model is deployed via a scalable FastAPI service, and live results are presented on a dynamic HTML/Tailwind CSS dashboard for instant threat visualization and alerting.",
    "tools": [
        "Python", 
        "XGBoost (GPU/CUDA)", 
        "FastAPI", 
        "Pandas/Numpy", 
        "HTML/Tailwind CSS", 
        "ApexCharts"
    ],
    "date": "09/2025",
    "codeLink": "https://github.com/harshasangur48/AI-Based-Network-Intrusion-detection-system.git"
},
{
    "id": 6,
    "title": "Enterprise Website Auditor: Security, Performance, and SEO Compliance Tool",
    "description": "Developed a comprehensive, single-page web application to perform in-depth auditing of enterprise websites across Security, Performance, and SEO best practices. The tool features an interactive dashboard with dynamic data visualization, real-time issue detection, and provides AI-powered suggestions for implementing corrective fixes. Results can be easily exported for reporting as a branded PDF document.",
    "tools": [
        "HTML5", 
        "TailwindCSS", 
        "Vanilla JavaScript (ES6+)", 
        "Chart.js", 
        "jsPDF/html2canvas", 
        "LocalStorage",
        "AI/NLP Concepts"
    ],
    "date": "07/2025",
    "codeLink": "https://github.com/harshasangur48/Team-Praudtech-86.git"
}
]

// Custom component to handle the animated border effect and core card styling
const MovingBorder = ({ children }: { children: React.ReactNode }) => (
  <div 
    // Card Base: Dark background, White border. Hover: Darker background, Orange glow, White text
    className={`group h-full flex flex-col bg-gray-900/70 border-4 border-white overflow-hidden relative transition-all duration-300
               hover:bg-gray-800 hover:text-white 
               hover:shadow-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:border-orange-500`}
  >
    
    {/* Animated Border Line - ABSOLUTELY positioned */}
    <div 
      // === LINEAR WIPE EFFECT - Same as Services Section ===
      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
    />

    {children}
  </div>
);


export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])
  
  // CSS for background elements (subtle grain/grid) copied from the Hero component
  const heroStyle = {
    // Dark, textured background (using repeating gradient for grain/noise effect)
    backgroundImage: `
      radial-gradient(ellipse at center, rgba(30,30,40,0.8) 0%, rgba(10,10,15,1) 100%),
      repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 4px),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 4px)
    `,
    backgroundColor: '#0A0A0F', // Fallback for very dark background
  };


  return (
    <section 
      id="portfolio" 
      ref={sectionRef} 
      className="py-24 px-4 text-white relative" 
      style={heroStyle}
    >
      <div className="max-w-6xl mx-auto">
        {/* === TITLE: PROJECTS === */}
        <div className="mb-20 border-b-8 border-red-500 pb-8">
          {/* Increased padding on h2 to ensure no cropping */}
          <h2 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400 py-4">PROJECTS</h2>
        </div>

        {/* === PROJECT CARDS === */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <MovingBorder>
                
                {/* Content */}
                <div className="flex-grow p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    {/* Title Text: Cyan base, Dark Blue on hover */}
                    <h3 className="text-2xl font-black flex-grow text-cyan-400 group-hover:text-white transition-colors duration-300">{project.title}</h3>
                    
                    {/* Date Tag: Red BG, White Text */}
                    <span className="text-xs font-black bg-red-500 text-white px-4 py-2 whitespace-nowrap ml-2 group-hover:bg-orange-500 transition-colors duration-300">
                      {project.date}
                    </span>
                  </div>

                  {/* Description Text */}
                  <p className="text-base mb-6 flex-grow text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-6 border-t-4 border-white pt-6 group-hover:border-gray-500 transition-colors duration-300">
                    {project.tools.map((tool) => (
                      // Tool Tags: Cyan BG, Black Text, Orange BG on hover
                      <span 
                        key={tool} 
                        className="text-xs font-black bg-cyan-500 text-gray-900 px-3 py-1 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Links - Only CODE button */}
                  <div className="flex gap-6 pt-4 border-t-4 border-white group-hover:border-gray-500 transition-colors duration-300">
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        className="flex items-center gap-2 text-sm font-black text-red-500 group-hover:text-orange-500 transition-colors duration-300"
                      >
                        <Github size={18} />
                        CODE
                      </a>
                    )}
                  </div>
                </div>
              </MovingBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
