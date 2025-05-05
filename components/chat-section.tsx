"use client"

import type React from "react"

import { useState, useRef } from "react"
import type { Message } from "../app/page"

export default function ChatSection() {
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm Kamogelos, your personal assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

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
      "Thanks for sharing. Is there anything specific you'd like to know about my experience or projects?",
      "I see. Let me know if you need any assistance with that.",
      `I found some information about "${userInput}". Would you like me to elaborate?`,
      "Feel free to check out my CV or Projects sections for more information about my work.",
      "I'd be happy to discuss potential collaborations or opportunities.",
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
    <div className="h-full flex flex-col">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="container mx-auto">
          <div className="space-y-8">
            {/* Welcome Message - Only show if no user messages yet */}
            {!messages.some((msg) => msg.sender === "user") && (
              <div className="border border-white border-thick p-8 text-center bg-dark-accent w-full mb-8">
                <div className="w-16 h-16 border border-white border-thick mx-auto mb-4 flex items-center justify-center">
                  <span className="material-icons text-3xl">waving_hand</span>
                </div>
                <h2 className="text-2xl mb-2">Welcome to Kamogelos Chat</h2>
                <p className="text-gray-400">
                  Your personal AI assistant. Ask me anything about my experience, projects, or how I can help you!
                </p>
              </div>
            )}

            {/* Messages */}
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`w-full flex ${message.sender === "user" ? "justify-end" : "justify-start"} ${
                  shouldGroupMessage(index) ? "mt-2" : "mt-6"
                }`}
              >
                {message.sender === "ai" && !shouldGroupMessage(index) && (
                  <div className="w-10 h-10 border border-white border-thick flex items-center justify-center mr-3">
                    <span className="material-icons">smart_toy</span>
                  </div>
                )}

                {shouldGroupMessage(index) && message.sender === "ai" && <div className="w-10 mr-3"></div>}

                <div className="max-w-[70%]">
                  <div
                    className={`border border-white ${
                      message.sender === "user" ? "border-thick" : "border-regular"
                    } p-4 ${message.sender === "ai" ? "bg-dark-accent" : ""}`}
                  >
                    <p>{message.content}</p>
                  </div>

                  {!shouldGroupMessage(index) && (
                    <p
                      className={`text-xs text-gray-400 mt-1 ${message.sender === "user" ? "text-right" : "text-left"}`}
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

            {/* Loading indicator */}
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
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="border-t border-white border-thick bg-dark-accent py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Ask Kamogelos anything..."
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
      </div>
    </div>
  )
}
