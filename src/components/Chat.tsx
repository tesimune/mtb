import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      // Here you would typically call an AI API to get a response
      // For now, we'll just echo the user's message
      setTimeout(() => {
        setMessages(prev => [...prev, { text: `AI response to: ${input}`, isUser: false }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <section id="chat" className="py-20 bg-purple-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">AI Chat Support</h2>
        <motion.div 
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-3 rounded-lg ${
                  message.isUser ? 'bg-purple-100 ml-auto' : 'bg-gray-100'
                } max-w-[80%]`}
              >
                {message.text}
              </motion.div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow p-2 border rounded-md"
              />
              <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">Send</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Chat;
