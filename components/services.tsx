"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Brain, Zap, BarChart3, Code2 } from "lucide-react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <Brain size={40} />,
    title: "Machine Learning & AI Engineering",
    description: "Building and deploying AI/ML models (XGBoost, Mistral AI) for classification, recommendation, and complex interpretation tasks.",
  },
  {
    icon: <Code2 size={40} />,
    title: "Data Science & Analytics:",
    description: "Creating interactive data dashboards (Streamlit, Folium) and visualizations for risk assessment and actionable insights.",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "System Optimization & High-Performance Computing",
    description: "Developing GPU-accelerated real-time systems and scalable APIs (FastAPI) for maximum efficiency and speed.",
  },
  {
    icon: <Zap size={40} />,
    title: "Security, Privacy & Auditing",
    description: "Engineering AI-Based Network Intrusion Detection systems and comprehensive security and performance auditing tools.",
  },
]

export default function Services() {
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
      id="services" 
      ref={sectionRef} 
      className="py-24 px-4 text-white relative" 
      style={heroStyle}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* === TITLE: SERVICES === */}
        {/* Border is WHITE, Text is Red/Cyan Gradient */}
        <div className="mb-20 border-b-8 border-white pb-8">
          <h2 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400">SERVICES</h2>
        </div>

        {/* === SERVICE CARDS === */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                // Container styles: Dark semi-transparent background, border changed to WHITE, RED glow on hover
                className="group bg-gray-900/70 border-4 border-white p-8 transition-all duration-300 h-full 
                           relative overflow-hidden
                           hover:shadow-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:border-red-500"
              >
                
                {/* Icon Container: Cyan text, stark border WHITE, hover effect to RED */}
                <div className="w-20 h-20 border-4 border-white flex items-center justify-center text-cyan-400 mb-6 
                            group-hover:text-red-500 group-hover:border-red-500 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title and Description */}
                <h3 className="text-3xl font-black text-cyan-400 group-hover:text-red-500 mb-4 transition-colors duration-300">{service.title}</h3>
                <p className="text-base leading-relaxed text-gray-400 group-hover:text-gray-200">{service.description}</p>
                
                {/* Subtle border line on hover (Top edge) - Transitioning to RED */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
