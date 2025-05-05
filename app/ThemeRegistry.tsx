"use client"

import { useState, createContext, useContext, useEffect } from "react"
import type { ReactNode } from "react"

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

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  // Start with dark mode by default
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Effect for handling initial setup
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  // Avoid rendering with wrong theme
  if (!mounted) {
    return null
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}
