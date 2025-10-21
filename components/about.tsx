"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react" 

interface EducationItem {
  title: string
  school: string
  period: string
}

interface WorkItem {
  title: string
  company: string
  period: string
  description: string
}

interface SkillItem {
  name: string
  percentage: number
}

const educationData: EducationItem[] = [
  {
    title: "B.E. in Computer Science",
    school: "Jawaharlal Nehru New College of Engineering",
    period: "2022 - 2026 | GPA: 8.87/10",
  },
  {
    title: "PU in Science",
    school: "Vikasa Pre-University College",
    period: "2020 - 2022 | GPA: 90.66%",
  },
  {
    title: "High School",
    school: "S.K.N. English School",
    period: "2010 - 2020 | GPA: 95.04%",
  },
]

const workData: WorkItem[] = [
  {
    title: "AI & ML Intern",
    company: "Microsoft & Edunet Foundation",
    period: "April 2025 - May 2025",
    description: "Developed movie recommendation system using MovieLens20M, SVD, and Tkinter",
  },
  {
    title: "Cybersecurity Intern",
    company: "IBM SkillsBuild & Edunet Foundation",
    period: "January 2025 - February 2025",
    description: "Built secure data hiding tool with Python, OpenCV, and Tkinter",
  },
  {
    title: "IEEE Student Member",
    company: "IEEE ,Student Branch ,JNNCE",
    period: "February 2025 - Present",
    description: "I've successfully led the 'CodeVerse' event during Anveshana 2025 at JNNCE IEEE Student branch, co-coordinated the 'Front end Workshop', and was a leading contributor and coordinator for the 'Advanced AI tools' workshop, all under the IEEE Mangalore Subsection and IEEE Bangalore Section.",
  },
  {
    title: "Student Activities Committee(SAC) Graphic Designer",
    company: "IEEE Mangalore Subsection Student Activities Committee(SAC)",
    period: "February 2025 - Present",
    description: "Designed high-quality posters, brochures, and event invitations for IEEE Mangalore Sub-Section, showcasing creativity and attention to detail while collaborating with team members for timely delivery, and implementing innovative design concepts that effectively communicated key messages and increased audience engagement.",
  },
]

const skillsData: SkillItem[] = [
  { name: "Python", percentage: 83 },
  { name: "Java", percentage: 72 },
  { name: "C", percentage: 70 },
  { name: "SQL", percentage: 80 },
  { name: "XGBoost", percentage: 80 },
  { name: "Artificial Intelligence", percentage: 85 },
  { name: "Machine Learning", percentage: 90 },
  { name: "Graphical Designing", percentage: 98 },
  { name: "Streamlit", "percentage": 85 },
  { name: "Tkinter", percentage: 80 },
  { name: "CSS", percentage: 75 },
  { name: "HTML", percentage: 80 },
  { name: "Effective Communication", percentage: 95 },
  { name: "Quick Learning Ability", percentage: 96 },
]

export default function About() {
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
      id="about" 
      ref={sectionRef} 
      className="py-24 px-4 text-white relative"
      // Apply the same custom style as the Hero section
      style={heroStyle}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* === TITLE: ABOUT === */}
        <div className="mb-20 border-b-8 border-red-500 pb-8">
          <h2 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400">ABOUT</h2>
        </div>

        {/* Education and Work Experience */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          {/* === EDUCATION === */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Accent color changed to CYAN */}
            <h3 className="text-4xl font-black mb-8 border-l-8 border-red-500 pl-6 text-cyan-400">EDUCATION</h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  // Stark border remains red-500, hover glow is CYAN. Background is semi-transparent dark gray.
                  className="border-4 border-gray-700 p-6 bg-gray-900/50 hover:bg-gray-800 transition-all duration-300 relative overflow-hidden group 
                             hover:shadow-cyan-400/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                >
                  {/* Title text is CYAN */}
                  <h4 className="font-black text-xl mb-2 text-cyan-400 group-hover:text-white">{edu.title}</h4>
                  <p className="text-sm mb-2 opacity-80 text-gray-300">{edu.school}</p>
                  {/* Period text changed to CYAN */}
                  <p className="text-sm font-bold text-cyan-400">{edu.period}</p>
                  {/* Subtle border line on hover gradient remains Red/Cyan */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </div>
              ))}
            </div>

            {/* === IEEE LOGO WITH NEON GLOW (Replicating Hero Style) === */}
            <div className={`flex justify-center mt-16 transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* max-w-sm (384px) used to increase size for better depth alignment */}
                <div className="relative w-full aspect-square max-w-sm mx-auto">
                    {/* Neon glowing circle - Enhanced for the aura effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-cyan-500 to-blue-600 blur-3xl opacity-70 animate-pulse" />

                    {/* Main Border/Aura Ring */}
                    <div className="relative z-10 rounded-full p-1.5 bg-gradient-to-br from-purple-500 to-cyan-500 shadow-2xl shadow-purple-500/50">

                        {/* Inner Black Circle to hold the image */}
                        <div className="relative rounded-full overflow-hidden bg-gray-900 border-4 border-black">
                            {/* Logo Image */}
                            <img
                                src="https://damaged-sapphire-dshzfkki1u.edgeone.app/Untitled_design-removebg-preview%20(1).png"
                                alt="IEEE Logo"
                                // p-12 used to increase the perimeter gap (padding) for better centering
                                className="object-contain w-full h-full p-12" 
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* END NEW LOGO SECTION */}
          </div>

          {/* === WORK EXPERIENCE === */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Accent color changed to CYAN */}
            <h3 className="text-4xl font-black mb-8 border-l-8 border-red-500 pl-6 text-cyan-400">EXPERIENCE</h3>
            <div className="space-y-6">
              {workData.map((work, index) => (
                <div
                  key={index}
                  // Stark border remains red-500, hover glow is CYAN. Background is semi-transparent dark gray.
                  className="border-4 border-gray-700 p-6 bg-gray-900/50 hover:bg-gray-800 transition-all duration-300 relative overflow-hidden group
                             hover:shadow-cyan-400/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                >
                  {/* Title text is CYAN */}
                  <h4 className="font-black text-xl mb-2 text-cyan-400 group-hover:text-white">{work.title}</h4>
                  <p className="text-sm mb-2 opacity-80 text-gray-300">{work.company}</p>
                  {/* Period text changed to CYAN */}
                  <p className="text-sm font-bold mb-3 text-cyan-400">{work.period}</p>
                  <p className="text-sm text-gray-400">{work.description}</p>
                    {/* Subtle border line on hover gradient remains Red/Cyan */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === SKILLS === */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Accent color changed to CYAN */}
          <h3 className="text-4xl font-black mb-8 border-l-8 border-red-500 pl-6 text-cyan-400">SKILLS</h3>
          
          {/* Main Skills Container border remains red-500, glow is RED. Background is semi-transparent dark gray. */}
          <div className="border-4 border-red-500/50 p-8 shadow-2xl shadow-red-500/20 bg-gray-900/70">
            <div className="grid md:grid-cols-2 gap-8">
              {skillsData.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-black text-lg text-white">{skill.name}</span>
                    {/* Percentage text is CYAN */}
                    <span className="font-black text-cyan-400">{skill.percentage}%</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="w-full bg-gray-700 h-3 overflow-hidden rounded-full">
                    <div
                      // Skill bar fill remains Red/Cyan gradient
                      className="h-full rounded-full bg-gradient-to-r from-red-500 to-cyan-400 transition-all duration-1000"
                      style={{
                        width: isVisible ? `${skill.percentage}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Tailwind animation definitions used in the style block, copied from Hero.jsx */}
      <style>{`
          @keyframes pulse-slow {
              0%, 100% {
                  transform: scale(1);
                  opacity: 0.2;
              }
              50% {
                  transform: scale(1.1);
                  opacity: 0.6;
              }
          }
          @keyframes pulse-slow-reverse {
              0%, 100% {
                  transform: scale(1.1) rotate(5deg);
                  opacity: 0.6;
              }
              50% {
                  transform: scale(1) rotate(-5deg);
                  opacity: 0.2;
              }
          }
          .animate-pulse-slow {
              animation: pulse-slow 10s infinite ease-in-out;
          }
          .animate-pulse-slow-reverse {
              animation: pulse-slow-reverse 15s infinite ease-in-out;
          }
      `}</style>
    </section>
  )
}
