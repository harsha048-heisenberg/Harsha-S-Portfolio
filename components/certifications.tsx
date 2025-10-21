/*
  This file implements the Certifications section of the portfolio.
  It uses the Cyberpunk/Neo-Brutalist theme with dark background,
  red structure lines, and gold/red accents on hover.
  It includes the fix for the large heading text cropping issue on mobile.
*/

"use client"

import { useState } from "react"
import { useEffect, useRef } from "react"
import { Award, Linkedin } from "lucide-react"

interface Certification {
  id: number
  title: string
  organization: string
  date: string
  imageLink?: string
  linkedinPostLink?: string
}

// Reorganized and updated certificate data
const defaultCertifications: Certification[] = [
  {
    id: 1,
    title: "Internship on Artificial Intelligence",
    organization: "An initiative by Microsoft in collaboration with Edunet Foundation and AICTE.",
    date: "10/05/2025",
    imageLink: "https://physical-crimson-dmm5etqemk.edgeone.app/Screenshot%202025-10-21%20131043.png",
    linkedinPostLink: "https://www.linkedin.com/posts/harsha-s-0043a9327_ai-internship-completion-certificate-activity-7332212564296110081-4GsQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ2OsQBR8Kdvhn7RD36WPM5nJ0GSR7fRZ4",
  },
  {
    id: 2,
    title: "Data Science Job Simulation",
    organization: "Job simulation for a Cybersecurity Analyst role by BCG X in collaboration with Forage",
    date: "27/07/2025",
    imageLink: "https://gross-purple-n1gszkf5su.edgeone.app/Screenshot%202025-10-19%20001610.png",
    linkedinPostLink: "https://www.linkedin.com/posts/harsha-s-0043a9327_bcg-x-data-science-job-simulation-activity-7355234904076382208-yFeq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ2OsQBR8Kdvhn7RD36WPM5nJ0GSR7fRZ4",
  },
  {
    id: 3,
    title: "Microsoft Azure AI Document Intelligence",
    organization: "Online course on Microsoft's AI Document Intelligence.This course provided in-depth knowledge on leveraging Microsoft Azure 's AI capabilities to extract structured data from unstructured documents, streamlining document processing tasks. This achievement enhances my ability to develop intelligent document processing solutions, contributing to more efficient and automated workflows.",
    date: "23/04/2025",
    imageLink: "https://homely-aqua-pptjpmfoz3.edgeone.app/1745410129764.jpeg",
    linkedinPostLink: "https://www.linkedin.com/posts/harsha-s-0043a9327_microsoftlearn-azureai-documentintelligence-activity-7320780698431250433-fGfC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ2OsQBR8Kdvhn7RD36WPM5nJ0GSR7fRZ4",
  },
   {
    id: 4,
    title: "Internship on Cybersecurity ",
    organization: "An initiative by IBM in collaboration with Edunet Foundation and AICTE.",
    date: "26/02/2025",
    imageLink: "https://equivalent-chocolate-rgmwgthdtd.edgeone.app/Screenshot%202025-10-21%20132351.png",
    linkedinPostLink: "https://www.linkedin.com/posts/harsha-s-0043a9327_cybersecurity-internship-completion-certificate-activity-7307347383548338177-gvIK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ2OsQBR8Kdvhn7RD36WPM5nJ0GSR7fRZ4",
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals",
    organization: "Fundamentals covering key cybersecurity concepts and practices, a course provided by IBM",
    date: "25/02/2025",
    imageLink: "https://glad-amaranth-26fb5dmegi.edgeone.app/Screenshot%202025-10-19%20002227.png",
    linkedinPostLink: "https://www.linkedin.com/posts/harsha-s-0043a9327_cybersecurity-ibm-skillsbuild-activity-7301174939104014336-ZENc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ2OsQBR8Kdvhn7RD36WPM5nJ0GSR7fRZ4",
  },
  {
    id: 6,
    title: "Cybersecurity Analyst Job Simulation",
    organization: "Job simulation for a Cybersecurity Analyst role by Tata in collaboration with Forage",
    date: "23/12/2024",
    imageLink: "https://territorial-yellow-vncxcqjvmk.edgeone.app/1734936524731.jpeg",
    linkedinPostLink: "https://www.linkedin.com/posts/harsha-s-0043a9327_cybersecurity-identityandaccessmanagement-activity-7276851211834654720-qnVQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ2OsQBR8Kdvhn7RD36WPM5nJ0GSR7fRZ4",
  },
  {
    id: 7,
    title: "ICIP: Critical Infrastructure Protection",
    organization: "Completed an online course on critical infrastructure protection offered by OPSWAT Academy",
    date: "09/01/2025",
    imageLink: "https://troubled-fuchsia-4ava3bsftr.edgeone.app/1736411620030.jpeg",
    linkedinPostLink: "https://www.linkedin.com/posts/harsha-s-0043a9327_cybersecurity-criticalinfrastructureprotection-activity-7283038209519816704-pWaF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ2OsQBR8Kdvhn7RD36WPM5nJ0GSR7fRZ4",
  },
  {
    id: 8,
    title: "Cyber Threat Intelligence 101",
    organization: "An introduction to Cyber Threat Intelligence by ArcX",
    date: "06/02/2025",
    imageLink: "https://extensive-gold-mghwfg7fww.edgeone.app/Screenshot%202025-10-19%20002919.png",
    linkedinPostLink: "https://www.linkedin.com/posts/harsha-s-0043a9327_cti-course-activity-7293470963243900930-svyC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJ2OsQBR8Kdvhn7RD36WPM5nJ0GSR7fRZ4",
  },
]

// Custom component to handle the animated border effect and core card styling
const MovingBorder = ({ children }: { children: React.ReactNode }) => (
  <div
    // Card Base: Dark background, White border. Hover: Gold shadow and border, NO BG CHANGE
    className={`group h-full flex flex-col bg-gray-900/70 border-4 border-white overflow-hidden relative transition-all duration-300
               hover:shadow-yellow-400/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:border-yellow-400`}
  >

    {/* Animated Border Line - ABSOLUTELY positioned */}
    <div
      // Line: From white to gold (yellow-400) on hover
      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
    />

    {children}
  </div>
)


export default function Certifications() {
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
  }


  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-24 px-4 text-white relative"
      style={heroStyle}
    >
      <div className="max-w-6xl mx-auto">
        {/* === TITLE: CERTIFICATIONS === */}
        {/* Fixed: Added responsive font size (text-5xl) to prevent horizontal cropping on mobile */}
        <div className="mb-20 border-b-8 border-red-500 pb-8">
          <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 leading-none py-4">
            CERTIFICATIONS
          </h2>
        </div>

        {/* === CERTIFICATIONS GRID === */}
        <div className="grid md:grid-cols-2 gap-8">
          {defaultCertifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <MovingBorder>

                {/* --- IMAGE LAYOUT (Top Section) --- */}
                <a
                  // Use cert.imageLink for the certificate image/link
                  href={cert.imageLink || "https://placehold.co/600x400/1e293b/FFFFFF/png?text=Certificate+Image"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-auto mb-6 relative overflow-hidden border-2 border-white group-hover:border-yellow-400 transition-colors duration-300"
                >
                  {/* Cyberpunk opening animation effect */}
                  <div className="absolute inset-0 bg-black/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                  <img
                    // Use cert.imageLink for the certificate image/link
                    src={cert.imageLink || "https://placehold.co/600x400/1e293b/FFFFFF/png?text=Certificate+Image"}
                    alt={`Certificate: ${cert.title}`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 text-yellow-400">
                    VIEW CERTIFICATE
                  </div>
                </a>
                {/* --- END IMAGE LAYOUT --- */}

                {/* Content */}
                <div className="flex-grow p-8 flex flex-col">

                  <div className="flex items-start justify-between mb-4">
                    <Award className="flex-shrink-0 text-cyan-400 group-hover:text-yellow-400 transition-colors duration-300" size={28} />
                  </div>

                  {/* Title and text colors updated for dark base / gold accent */}
                  <h3 className="text-2xl font-black mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">{cert.title}</h3>
                  <p className="text-base mb-4 text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{cert.organization}</p>

                  {/* Date Tag */}
                  <p className="text-sm font-bold mt-auto pt-6 border-t-4 border-red-500 group-hover:border-yellow-400 transition-colors duration-300">
                    <span className="text-red-500 group-hover:text-yellow-400 transition-colors duration-300">Issued:</span> {cert.date}
                  </p>

                  {/* Badge and LinkedIn Post Button */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {/* VERIFIED Badge */}
                    <span className="inline-block bg-red-500 text-white text-xs font-black px-4 py-2 group-hover:bg-yellow-400 group-hover:text-gray-900 transition-colors duration-300">VERIFIED</span>

                    {/* LinkedIn Post Button */}
                    {cert.linkedinPostLink && (
                        <a
                            href={cert.linkedinPostLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-black px-4 py-2 bg-blue-600 text-white
                                      hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
                        >
                            <Linkedin size={14} />
                            VIEW POST
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
