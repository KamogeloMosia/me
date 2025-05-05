"use client"

import { useState } from "react"
import { useTheme } from "./ThemeRegistry"
import ChatHistory from "../components/chat-history"
import CVSection from "../components/cv-section"
import ProjectsSection from "../components/projects-section"
import Navbar from "../components/navbar"

export type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export type ChatHistoryItem = {
  id: string
  question: string
  answer: string
  timestamp: Date
}

export type Section = "chat" | "cv" | "projects"

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState<Section>("chat")
  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([
    {
      id: "1",
      question: "How can I forget a bad memory?",
      answer: "Forgetting a bad memory entirely may be challenging, as memories are complex and deeply ingrained...",
      timestamp: new Date(Date.now() - 28 * 60 * 1000), // 28 minutes ago
    },
    {
      id: "2",
      question: "Imagine a student going to school. She has purple hair and...",
      answer:
        "I'll try to create that. Here is the image I generated based on your description. I hope you like it. 😊",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    },
    {
      id: "3",
      question: "Tell me the story of a student who was going to school an...",
      answer: "Once upon a time, in the quaint town of Meadowville, there lived a spirited high school student name...",
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    },
    {
      id: "4",
      question: "What can I do to increase concentration while...",
      answer: "Improving concentration while studying involves adopting effective study habits, creatin...",
      timestamp: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000), // 12 days ago
    },
    {
      id: "5",
      question: "What do you know about the French Revolution?",
      answer:
        "The French Revolution was a period of radical social and political change in France that lasted from 1789 to 1...",
      timestamp: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000), // 16 days ago
    },
    {
      id: "6",
      question: "Who is Pope Francis?",
      answer: "As of my last knowledge update in January 2022, Pope Francis, born Jorge Mario Bergoglio, is th...",
      timestamp: new Date(Date.now() - 17 * 24 * 60 * 60 * 1000), // 17 days ago
    },
    {
      id: "7",
      question: "How to get more followers on Instagram?",
      answer:
        "Increasing your followers on Instagram requires a combination of strategies to engage with your audience a...",
      timestamp: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000), // 20 days ago
    },
    {
      id: "8",
      question: "Tell me about the latest trends in fashion design",
      answer: "As of my last knowledge update in January 2022, I can provide some general trends that were prev...",
      timestamp: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // 2 months ago
    },
  ])

  const navigateTo = (section: Section) => {
    setActiveSection(section)
  }

  return (
    <div className="bg-background text-text-primary font-montserrat">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} navigateTo={navigateTo} activeSection={activeSection} />

      {activeSection === "chat" && (
        <ChatHistory chatHistory={chatHistory} startNewChat={() => {}} openChat={() => {}} />
      )}
      {activeSection === "cv" && <CVSection />}
      {activeSection === "projects" && <ProjectsSection />}
    </div>
  )
}
