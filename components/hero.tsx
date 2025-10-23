/*
  This file implements the Hero section of the portfolio.
  It uses the Cyberpunk/Neo-Brutalism theme with dark, textured background
  and neon blue/purple accents.
  The layout is adjusted to show the image ABOVE the text on mobile screens.
*/
"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Wait slightly to ensure CSS variables load before triggering transition
        setTimeout(() => setIsVisible(true), 50)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    // CSS for background elements (subtle grain/grid)
    const heroStyle = {
        // 1. Dark, textured background (using repeating gradient for grain/noise effect)
        backgroundImage: `
            radial-gradient(ellipse at center, rgba(30,30,40,0.8) 0%, rgba(10,10,15,1) 100%),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 4px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 4px)
        `,
        backgroundColor: '#0A0A0F', // Fallback for very dark background
    }


    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 relative overflow-hidden" // Changed to flex-col
            style={heroStyle}
        >
            {/* Absolute positioning for subtle background light/particle effect */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Subtle, slow-moving radial glow source */}
                <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50 animate-pulse-slow-reverse"></div>
            </div>


            <div className="max-w-6xl mx-auto w-full relative z-10 flex-grow flex items-center justify-center">
                <div
                    className={`transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                        {/* === PROFILE IMAGE WITH NEON GLOW === */}
                        {/* ORDER: order-1 on mobile, order-1 on desktop (keeps image first) */}
                        <div className="flex-shrink-0 order-1 md:order-1">
                            <div className="relative w-full aspect-square max-w-sm mx-auto">
                                {/* Neon glowing circle - Enhanced for the aura effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-cyan-500 to-blue-600 blur-3xl opacity-70 animate-pulse" />

                                {/* Main Border/Aura Ring */}
                                <div className="relative z-10 rounded-full p-1.5 bg-gradient-to-br from-purple-500 to-cyan-500 shadow-2xl shadow-purple-500/50">

                                    {/* Inner Black Circle to hold the image */}
                                    <div className="relative rounded-full overflow-hidden bg-gray-900 border-4 border-black">
                                        {/* Placeholder for Profile Image */}
                                        <img
                                            src="https://hon-tan-sc1jfygrvd.edgeone.app/Hs.png"
                                            alt="Harsha S Profile"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* === TEXT CONTENT === */}
                        {/* ORDER: order-2 on mobile (pushes it below the image), order-2 on desktop */}
                        <div className="order-2 md:order-2 text-center md:text-left">
                            <p className="text-xl text-cyan-400 font-semibold mb-4 tracking-widest">
                                HELLO, I AM
                            </p>

                            <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                                <span
                                    className="font-extrabold"
                                    style={{
                                        color: "transparent",
                                        backgroundImage: "linear-gradient(90deg, #6ff6ff 0%, #39d1ff 100%)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        // Adjusted textShadow for reduced intensity (approx 50% of previous opacities)
                                        textShadow: "0 0 3px rgba(147, 208, 227, 0.25), 0 0 9px rgba(65, 248, 236, 0.35), 0 4px 15px rgba(57,209,255,0.15)"
                                    }}
                                >
                                    HARSHA S
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed max-w-xl font-medium mx-auto md:mx-0">
                                Highly <span className="font-black text-purple-400">analytical</span> and motivated <span className="font-black text-cyan-400">CS student</span> proficient in <span className="font-black text-cyan-400">PYTHON</span>, <span className="font-black text-purple-400">ML/Data Science</span>, and developing data-driven solutions using <span className="font-black text-purple-400">XGBoost</span>, <span className="font-black text-cyan-400">Streamlit</span>, and Tkinter. As an active <span className="font-black text-cyan-400">IEEE member</span>, I've demonstrated <span className="font-black text-cyan-400">leadership</span> and strong <span className="font-black text-purple-400">coordination</span> skills across multiple technical events, while also serving as a <span className="font-black text-cyan-400">Graphic Designer</span> for organizational assets. Passionate about solving real-world problems through AI and analytics.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-8 justify-center md:justify-start">
                                <button
                                    onClick={() => scrollToSection("portfolio")}
                                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-black text-lg shadow-lg shadow-purple-500/50 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 active:scale-95 flex items-center gap-2"
                                >
                                    VIEW PROJECTS
                                </button>
                                {/* NEW: View Resume button/link added here */}
                                <a
                                    href="https://squealing-yellow-nfrlhbtjgj.edgeone.app/Harsha%20S%20resume%20(1).pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-transparent text-cyan-400 border-2 border-purple-500 font-black text-lg hover:bg-purple-900/30 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 active:scale-95 flex items-center justify-center"
                                >
                                    VIEW RESUME
                                </a>
                                {/* END NEW BUTTON */}
                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="px-8 py-4 bg-transparent text-cyan-400 border-2 border-purple-500 font-black text-lg hover:bg-purple-900/30 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 active:scale-95"
                                >
                                    CONTACT ME
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll down indicator - Now positioned below the main content, visible on ALL screens */}
            <div className={`pt-10 pb-5 text-center transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <ArrowDown className="h-8 w-8 text-cyan-400 animate-bounce mx-auto" />
            </div>

            {/* Tailwind animation definitions used in the style block */}
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
