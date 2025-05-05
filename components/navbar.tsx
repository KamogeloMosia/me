"use client"

import { useState, useEffect } from "react"
import type { Section } from "../app/page"

interface NavbarProps {
  isDarkMode: boolean
  toggleTheme: () => void
  navigateTo: (section: Section) => void
  activeSection: Section
}

export default function Navbar({ isDarkMode, toggleTheme, navigateTo, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Handle scroll to add shadow to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleNavigation = (section: Section) => {
    navigateTo(section)
    setMenuOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Fixed Navbar */}
      <header
        className={`border-b border-white ${
          scrolled ? "border-thick" : "border-regular"
        } py-4 bg-dark-accent transition-all duration-300`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 border border-white border-thick flex items-center justify-center mr-4">
              <span className="material-icons">smart_toy</span>
            </div>
            <h1 className="text-xl font-normal">Kamogelos Chat Assistant</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 border border-white border-thick flex items-center justify-center"
            >
              <span className="material-icons">{isDarkMode ? "light_mode" : "dark_mode"}</span>
            </button>
            <button
              onClick={toggleMenu}
              className="w-10 h-10 border border-white border-thick flex items-center justify-center"
            >
              <span className="material-icons">{menuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu (simplified without complex animations) */}
      {menuOpen && (
        <div className="bg-dark-accent border-b border-white border-thick">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation("chat")}
                className={`flex items-center p-3 border border-white ${
                  activeSection === "chat" ? "border-thick bg-darker" : "border-thin"
                } hover:border-thick`}
              >
                <span className="material-icons mr-3">chat</span>
                <span>Chat</span>
              </button>
              <button
                onClick={() => handleNavigation("cv")}
                className={`flex items-center p-3 border border-white ${
                  activeSection === "cv" ? "border-thick bg-darker" : "border-thin"
                } hover:border-thick`}
              >
                <span className="material-icons mr-3">description</span>
                <span>CV / Resume</span>
              </button>
              <button
                onClick={() => handleNavigation("projects")}
                className={`flex items-center p-3 border border-white ${
                  activeSection === "projects" ? "border-thick bg-darker" : "border-thin"
                } hover:border-thick`}
              >
                <span className="material-icons mr-3">work</span>
                <span>Projects</span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
