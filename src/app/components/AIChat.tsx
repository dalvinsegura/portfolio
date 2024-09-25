"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaPaperPlane, FaRobot } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import ReactMarkdown from "react-markdown";

interface AIChatProps {
  onClose: () => void;
}

const messageSuggestions = [
  "Tell me about Dalvin's background",
  "What projects has Dalvin worked on?",
  "What are Dalvin's main skills?",
  "How can I contact Dalvin?",
];

export default function AIChat({ onClose }: AIChatProps) {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (message: string) => {
    if (message.trim() && !loading) {
      setMessages((prev) => [...prev, { text: message, isUser: true }]);
      setInput("");
      setLoading(true);

      try {
        const response = await fetch("/api/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
          body: JSON.stringify({
            userPrompt: message,
          }),
        });

        const data = await response.json();
        const aiMessage =
          data?.response || "I'm sorry, I couldn't process that request.";
        setMessages((prev) => [...prev, { text: aiMessage, isUser: false }]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
        setMessages((prev) => [
          ...prev,
          {
            text: "I'm sorry, there was an error processing your request.",
            isUser: false,
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSubmit(suggestion);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
    >
      <div className="bg-gray-900 rounded-lg w-full max-w-4xl h-[90vh] flex flex-col shadow-xl">
        <div className="p-6 bg-gray-800 rounded-t-lg">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <FaRobot className="mr-2 text-blue-500" />
              DalvinAI: Your Personal Portfolio Guide
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes />
            </button>
          </div>
          <p className="text-gray-300 text-sm">
            Ask me anything about Dalvin's projects, skills, or background. I'm
            here to help you explore his portfolio!
          </p>
        </div>

        <div className="flex-grow overflow-y-auto p-6">
          <div className="bg-red-600 bg-opacity-20 border border-red-600 rounded-lg p-3 mb-4">
            <div className="flex items-center">
              <IoMdAlert className="text-red-600 mr-2 flex-shrink-0" />
              <p className="text-sm text-red-100">
                This conversation is not stored and will be lost upon page
                reload. The AI does not remember previous messages.
              </p>
            </div>
          </div>

          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mb-4 flex ${
                  msg.isUser ? "justify-end" : "justify-start"
                }`}
              >
                {!msg.isUser && (
                  <div className={`flex-shrink-0 `}>
                    <Image
                      src="/dalvinsegura.webp"
                      alt="Dalvin Segura"
                      width={40}
                      height={40}
                      className="rounded-full mr-2"
                    />
                  </div>
                )}
                <span
                  className={`inline-block p-3 rounded-lg ${
                    msg.isUser ? "bg-blue-600" : "bg-gray-700"
                  } max-w-[80%] markdown-content`}
                >
                  {msg.isUser ? (
                    msg.text
                  ) : (
                    <ReactMarkdown skipHtml={true}>{msg.text}</ReactMarkdown>
                  )}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          {loading && (
            <div className="text-center text-gray-400 animate-pulse">
              AI is thinking...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-6 bg-gray-800 rounded-b-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(input);
            }}
            className="flex mb-4"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your question..."
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-r-lg px-4 py-2 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              <FaPaperPlane />
            </button>
          </form>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2">
              Suggested questions:
            </h3>
            <div className="flex flex-wrap gap-2">
              {messageSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="bg-gray-700 text-sm text-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
