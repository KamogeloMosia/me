"use client"

import type React from "react"
import { useState, useEffect, createContext, useContext } from "react"

// Create context for theme toggling
type ThemeContextType = {
  isDarkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true, // Default to dark mode
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  // Start with dark mode by default
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Effect for handling system preference
  useEffect(() => {
    setMounted(true)
    // Always set to dark mode
    setIsDarkMode(true)

    // Apply Montserrat font to the entire document
    document.documentElement.style.fontFamily = '"Montserrat", sans-serif'
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  // Avoid rendering with wrong theme
  if (!mounted) {
    // Return a dark-themed div to prevent flash of light theme
    return (
      <div
        style={{
          backgroundColor: "#0A0A0F",
          color: "#ffffff",
          height: "100vh",
          width: "100vw",
          fontFamily: "Montserrat, sans-serif",
        }}
      />
    )
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}
