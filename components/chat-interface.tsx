"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import type { Message, ChatHistoryItem } from "../app/page"

interface ChatInterfaceProps {
  goBack: () => void
  activeChat: ChatHistoryItem | null
}

export default function ChatInterface({ goBack, activeChat }: ChatInterfaceProps) {
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize messages based on activeChat
  useEffect(() => {
    if (activeChat) {
      setMessages([
        {
          id: `${activeChat.id}-question`,
          content: activeChat.question,
          sender: "user",
          timestamp: activeChat.timestamp,
        },
        {
          id: `${activeChat.id}-answer`,
          content: activeChat.answer,
          sender: "ai",
          timestamp: new Date(activeChat.timestamp.getTime() + 1000), // 1 second later
        },
      ])
    } else {
      setMessages([
        {
          id: "welcome",
          content: "Hello! I'm Kamogelos AI. How can I help you today?",
          sender: "ai",
          timestamp: new Date(),
        },
      ])
    }
  }, [activeChat])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

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
      "I'd be happy to discuss this further if you have more questions.",
      "That's a great question. Here's what I know about it...",
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

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-4 flex items-center">
        <button onClick={goBack} className="flex items-center">
          <span className="material-icons mr-2">arrow_back</span>
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              {message.sender === "ai" && (
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="material-icons text-white text-sm">smart_toy</span>
                </div>
              )}

              <div
                className={`max-w-[75%] rounded-2xl p-3 ${
                  message.sender === "user" ? "bg-purple-primary text-white" : "bg-white text-text-primary"
                }`}
              >
                <p>{message.content}</p>
                <p
                  className={`text-xs mt-1 ${message.sender === "user" ? "text-purple-light" : "text-text-secondary"}`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>

              {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-purple-light flex items-center justify-center ml-2 flex-shrink-0">
                  <span className="material-icons text-purple-primary text-sm">person</span>
                </div>
              )}
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-2">
                <span className="material-icons text-white text-sm">smart_toy</span>
              </div>
              <div className="bg-white rounded-2xl p-3">
                <div className="flex space-x-1">
                  <div className="dot w-2 h-2 bg-text-secondary rounded-full"></div>
                  <div className="dot w-2 h-2 bg-text-secondary rounded-full"></div>
                  <div className="dot w-2 h-2 bg-text-secondary rounded-full"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center bg-background rounded-full p-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            ref={inputRef}
            className="flex-1 bg-transparent outline-none px-3 py-2"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              inputValue.trim() && !isLoading ? "bg-purple-primary text-white" : "bg-gray-200 text-gray-400"
            }`}
          >
            <span className="material-icons">send</span>
          </button>
        </div>
      </div>
    </div>
  )
}
