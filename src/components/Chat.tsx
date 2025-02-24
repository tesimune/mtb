import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content:
              'You are an AI doctor providing accurate medical advice. Keep responses professional and empathetic.',
          },
          ...messages.map((msg) => ({
            role: msg.isUser ? 'user' : ('assistant' as 'user' | 'assistant'),
            content: msg.text,
          })),
          { role: 'user', content: input },
        ],
        temperature: 0.7,
        max_tokens: 150,
      });

      const aiMessage = {
        text:
          response.choices[0]?.message?.content ||
          "I'm here to help. Could you clarify your question?",
        isUser: false,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, I couldn't fetch a response.", isUser: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='chat' className='py-20 bg-purple-100'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>
          AI Doctor
        </h2>
        <motion.div
          className='max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='h-96 overflow-y-auto p-4 space-y-4'>
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
            {loading && (
              <motion.div className='p-3 bg-gray-100 rounded-lg'>
                Thinking🧑🏿‍⚕️...
              </motion.div>
            )}
          </div>
          <form onSubmit={handleSubmit} className='p-4 border-t'>
            <div className='flex space-x-2'>
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Ask me anything about your health...'
                className='flex-grow p-2 border rounded-md'
                disabled={loading}
              />
              <button
                type='submit'
                className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300'
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Chat;
