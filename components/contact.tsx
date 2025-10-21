"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"

// Custom component to handle the animated border effect and core card styling
const MovingBorder = ({ children }: { children: React.ReactNode }) => (
  <div 
    // Card Base: Dark background, White border. Hover: Blue shadow and border, NO BG CHANGE
    className={`group h-full flex flex-col bg-gray-900/70 border-4 border-white overflow-hidden relative transition-all duration-300
               hover:shadow-cyan-400/50 hover:shadow-[0_0_20px_rgba(52,211,255,0.5)] hover:border-cyan-400`}
  >
    
    {/* Animated Border Line - ABSOLUTELY positioned */}
    <div 
      // Line: From white to blue (cyan-400) on hover
      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
    />

    {children}
  </div>
);


export default function Contact() {
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

  // === UPDATED CONTACT INFO ===
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+918310283625",
      link: "tel:+918310283625",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "harshasangur048@gmail.com",
      link: "mailto:harshasangur048@gmail.com",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Shivamogga, Karnataka, India", // Updated location
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "https://www.linkedin.com/in/harsha-s-0043a9327/",
      link: "https://www.linkedin.com/in/harsha-s-0043a9327/",
    },
    {
      icon: <Github size={24} />,
      label: "https://github.com/harshasangur48",
      link: "https://github.com/harshasangur48",
    },
  ]
  
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
    <section id="contact" ref={sectionRef} className="py-20 px-4 text-white relative" style={heroStyle}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400">GET IN TOUCH</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        {/* Contact Info Boxes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={info.label}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
                <MovingBorder>
                  <a
                    href={info.link}
                    className="group block p-6 transition-all duration-300 h-full flex flex-col justify-center items-center text-center"
                  >
                    {/* Icon - Cyan base, Blue on hover */}
                    <div className="text-cyan-400 mb-4 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300">
                      {info.icon}
                    </div>
                    {/* Label */}
                    <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{info.label}</h3>
                    {/* Value */}
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors text-sm">{info.value}</p>
                  </a>
                </MovingBorder>
            </div>
          ))}
        </div>

        {/* Social Links (Simplified, centered) */}
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.link}
                    className={`w-14 h-14 flex items-center justify-center bg-gray-900/70 border-4 border-white rounded-full text-cyan-400 
                                hover:bg-black hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 hover:scale-110 
                                shadow-lg hover:shadow-cyan-400/50 hover:shadow-[0_0_15px_rgba(52,211,255,0.5)] 
                                ${isVisible ? "opacity-100" : "opacity-0"}`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}
