"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useTheme } from "./ThemeRegistry"

// Message type definition
type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme()
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Handle scroll events to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (chatContainerRef.current) {
        setShowScrollTop(chatContainerRef.current.scrollTop > 100)
      }
    }

    const container = chatContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    // With flex-col-reverse, the "bottom" is actually at the top of the container
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0
    }
  }, [messages])

  const handleScrollToTop = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  const handleSend = () => {
    if (inputValue.trim()) {
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        content: inputValue.trim(),
        sender: "user",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      setIsLoading(true)
      setInputValue("")

      // Simulate AI response after a delay
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: getAIResponse(inputValue.trim()),
          sender: "ai",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, aiMessage])
        setIsLoading(false)
      }, 1500)
    }
  }

  // Simple AI response generator
  const getAIResponse = (userInput: string): string => {
    const responses = [
      "I understand. Can you tell me more about that?",
      "That's interesting! How can I help you with this?",
      "Thanks for sharing. Is there anything specific you'd like to know?",
      "I see. Let me know if you need any assistance with that.",
      `I found some information about "${userInput}". Would you like me to elaborate?`,
    ]

    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && inputValue.trim()) {
      e.preventDefault()
      handleSend()
    }
  }

  // Format timestamp
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  // Check if messages should be grouped (same sender, within 2 minutes)
  const shouldGroupMessage = (index: number): boolean => {
    if (index === 0) return false

    const currentMessage = messages[index]
    const previousMessage = messages[index - 1]

    return (
      currentMessage.sender === previousMessage.sender &&
      currentMessage.timestamp.getTime() - previousMessage.timestamp.getTime() < 120000 // 2 minutes
    )
  }

  return (
    <div className="flex flex-col h-screen bg-darker text-white font-montserrat">
      {/* App Bar */}
      <header className="border-b border-white border-thick py-4 bg-dark-accent">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 border border-white border-thick flex items-center justify-center mr-4">
              <span className="material-icons">smart_toy</span>
            </div>
            <h1 className="text-xl font-normal">SayHalo Assistant</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 border border-white border-thick flex items-center justify-center"
            >
              <span className="material-icons">{isDarkMode ? "light_mode" : "dark_mode"}</span>
            </button>
            <button className="w-10 h-10 border border-white border-thick flex items-center justify-center">
              <span className="material-icons">settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="container mx-auto h-full flex flex-col py-8 px-4">
          {/* Welcome Message */}
          <div className="border border-white border-thick p-8 mb-8 text-center bg-dark-accent">
            <div className="w-16 h-16 border border-white border-thick mx-auto mb-4 flex items-center justify-center">
              <span className="material-icons text-3xl">waving_hand</span>
            </div>
            <h2 className="text-2xl mb-2">Welcome to SayHalo</h2>
            <p className="text-gray-400">Your personal AI assistant. Ask me anything to get started!</p>
          </div>

          {/* Chat Messages */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto flex flex-col-reverse px-2">
            <div className="flex flex-col space-y-8">
              {isLoading && (
                <div className="flex items-center mt-8">
                  <div className="w-10 h-10 border border-white border-thick flex items-center justify-center mr-3">
                    <span className="material-icons">smart_toy</span>
                  </div>
                  <div className="border border-white border-regular p-4 flex items-center justify-center min-w-[60px] bg-dark-accent">
                    <div className="flex space-x-1 items-center">
                      <div className="dot w-1.5 h-1.5 bg-gray-400"></div>
                      <div className="dot w-1.5 h-1.5 bg-gray-400"></div>
                      <div className="dot w-1.5 h-1.5 bg-gray-400"></div>
                    </div>
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`w-full flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  } ${shouldGroupMessage(index) ? "mt-2" : "mt-6"}`}
                >
                  {message.sender === "ai" && !shouldGroupMessage(index) && (
                    <div className="w-10 h-10 border border-white border-thick flex items-center justify-center mr-3">
                      <span className="material-icons">smart_toy</span>
                    </div>
                  )}

                  {shouldGroupMessage(index) && message.sender === "ai" && <div className="w-10 mr-3"></div>}

                  <div className="max-w-[70%]">
                    <div
                      className={`border border-white ${message.sender === "user" ? "border-thick" : "border-regular"} p-4 ${message.sender === "ai" ? "bg-dark-accent" : ""}`}
                    >
                      <p>{message.content}</p>
                    </div>

                    {!shouldGroupMessage(index) && (
                      <p
                        className={`text-xs text-gray-400 mt-1 ${
                          message.sender === "user" ? "text-right" : "text-left"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    )}
                  </div>

                  {message.sender === "user" && !shouldGroupMessage(index) && (
                    <div className="w-10 h-10 border border-white border-thick flex items-center justify-center ml-3">
                      <span className="material-icons">person</span>
                    </div>
                  )}

                  {shouldGroupMessage(index) && message.sender === "user" && <div className="w-10 ml-3"></div>}
                </div>
              ))}

              <div ref={chatEndRef}></div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
              <button
                onClick={handleScrollToTop}
                className="fixed bottom-24 right-6 border border-white border-thick p-2 flex items-center justify-center bg-dark-accent"
              >
                <span className="material-icons">keyboard_arrow_up</span>
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Chat Input */}
      <footer className="border-t border-white border-thick py-6 bg-dark-accent">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Ask SayHalo anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                ref={inputRef}
                className="w-full border border-white border-thick bg-transparent p-3 outline-none"
              />
              {inputValue && (
                <button
                  onClick={() => setInputValue("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <span className="material-icons text-sm">close</span>
                </button>
              )}
            </div>

            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className={`border border-white border-thick w-14 h-14 flex items-center justify-center ${
                !inputValue.trim() || isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div>
              ) : (
                <span className="material-icons">send</span>
              )}
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
