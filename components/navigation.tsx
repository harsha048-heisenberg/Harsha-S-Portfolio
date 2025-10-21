/*
  This file contains the Navigation component, which implements a fixed, sticky
  header across all screen sizes.
  Theme: High-contrast White Background / Black Text with Cyan Hover accents.
*/
"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  scrolled: boolean
}

// Logo URL provided by the user
const LOGO_URL = "https://established-crimson-bhjbqqhidq.edgeone.app/Untitled_design-removebg-preview.png";

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  // Define the navigation items
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    // Note: Using a shorter label for mobile view to prevent cropping
    { label: "Projects", id: "portfolio" }, 
    { label: "Certificates", id: "certifications" },
    { label: "Contact", id: "contact" },
  ]

  // Helper function for rendering links
  const renderLinks = (isMobile = false) => (
    navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className={`text-sm font-medium transition-colors ${
          isMobile ? "block w-full text-left py-2" : ""
        } 
        // Applying Cyan hover and Black text/icons for the high-contrast theme
        text-gray-900 hover:text-cyan-500`}
      >
        {item.label}
      </button>
    ))
  )

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-md 
        // Force solid white background at all times for visibility against dark Hero section
        bg-white border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* === LOGO + TITLE === */}
          <div className="flex items-center gap-2">
            <img 
              src={LOGO_URL} 
              alt="Harsha S Logo" 
              className="h-8 w-auto object-contain" 
            />
            <div className="text-2xl font-bold text-gray-900">
              Harsha S
            </div>
          </div>
          {/* === END LOGO + TITLE === */}

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {renderLinks()}
          </div>

          {/* Mobile Menu Button (Black Icons) */}
          <button 
            className="md:hidden text-gray-900 hover:text-cyan-500 transition-colors" 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown (Cyan hover on White background) */}
        {mobileOpen && (
          // Off-Canvas Sidebar Content
          <div 
            className="md:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            <div 
              className={`absolute right-0 w-64 h-full bg-white p-6 shadow-2xl transition-transform duration-300 ${
                mobileOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <div className="space-y-4">
                {renderLinks(true)}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
