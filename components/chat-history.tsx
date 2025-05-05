"use client"

import type { ChatHistoryItem } from "../app/page"

interface ChatHistoryProps {
  chatHistory: ChatHistoryItem[]
  startNewChat: () => void
  openChat: (chat: ChatHistoryItem) => void
}

export default function ChatHistory({ chatHistory, startNewChat, openChat }: ChatHistoryProps) {
  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffInSeconds < 60) {
      return `${diffInSeconds} secs ago`
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60)
    if (diffInMinutes < 60) {
      return `${diffInMinutes} mins ago`
    }

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) {
      return `${diffInHours} hours ago`
    }

    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 30) {
      return `${diffInDays} days ago`
    }

    const diffInMonths = Math.floor(diffInDays / 30)
    return `${diffInMonths} months ago`
  }

  return (
    <div className="flex-1 px-4 pb-6">
      {/* Header with back button and profile */}
      <div className="flex justify-between items-center py-4">
        <button className="flex items-center">
          <span className="material-icons mr-2">arrow_back</span>
          <span className="font-medium">Back</span>
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src="/placeholder.svg?key=1hd5f" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* New Chat Header */}
      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-bold mb-2">Start a new chat</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl mr-2">With</span>
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <span className="material-icons text-white">smart_toy</span>
            </div>
            <span className="text-2xl text-purple-primary ml-2">Chat bot AI</span>
          </div>
          <button onClick={startNewChat} className="new-topic-button">
            <span className="material-icons">add</span>
            <span>New Topic</span>
          </button>
        </div>
      </div>

      {/* History Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">History</h2>

        {/* Search Bar */}
        <div className="search-bar flex items-center mb-6">
          <span className="text-text-secondary">Search...</span>
          <span className="material-icons ml-auto text-text-secondary">search</span>
        </div>

        {/* Tabs */}
        <div className="flex space-x-3 mb-6 overflow-x-auto">
          <button className="tab-button active">Chats</button>
          <button className="tab-button">Archived</button>
          <button className="tab-button">Images</button>
        </div>

        {/* Chat History Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chatHistory.map((chat) => (
            <div key={chat.id} className="chat-card" onClick={() => openChat(chat)}>
              <h3 className="text-purple-primary font-semibold mb-2 line-clamp-2">{chat.question}</h3>
              <p className="text-text-secondary text-sm mb-3 line-clamp-3">{chat.answer}</p>
              <p className="text-text-secondary text-xs">{formatTimeAgo(chat.timestamp)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
