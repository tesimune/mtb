"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      // Here you would typically call an AI API to get a response
      // For now, we'll just echo the user's message
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: `AI response to: ${input}`, isUser: false }])
      }, 1000)
      setInput("")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        AI Chat
      </motion.h1>
      <div className="max-w-md mx-auto bg-purple-100 p-4 rounded-lg shadow-lg">
        <div className="h-96 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-2 p-2 rounded-lg ${
                message.isUser ? "bg-purple-600 text-white ml-auto" : "bg-white"
              } max-w-[80%]`}
            >
              {message.text}
            </motion.div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 border rounded"
          />
          <button type="submit" className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat

