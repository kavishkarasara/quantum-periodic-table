"use client";

import React, { useState, useEffect, useRef } from "react";
import { useChat } from "ai/react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <motion.div
        drag
        dragMomentum={false}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
        style={{ touchAction: "none" }} // Prevents scrolling while dragging on mobile
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="fab"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-shadow border border-white/20 pointer-events-auto"
            >
              <MessageCircle size={28} />
            </motion.button>
          ) : (
            <motion.div
              key="chat-window"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-[90vw] md:w-[400px] h-[550px] max-h-[80vh] flex flex-col bg-slate-950/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.15)] overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-slate-900/50 border-b border-purple-500/20 backdrop-blur-md cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-3 pointer-events-none">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500 blur-md opacity-50 rounded-full"></div>
                    <div className="relative bg-slate-800 p-2 rounded-full border border-cyan-500/50">
                      <AtomIcon className="text-cyan-400 w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-slate-100 font-bold flex items-center gap-2">
                      Quantum Guide <Sparkles size={14} className="text-purple-400" />
                    </h3>
                    <p className="text-xs text-cyan-400">AI Chemistry Assistant</p>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                  className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages Area */}
              <div 
                className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
                onPointerDown={(e) => e.stopPropagation()} // Prevent dragging from messages
              >
                {messages.length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                    <Bot size={48} className="text-purple-400" />
                    <p className="text-sm text-slate-300 px-4">
                      Hello! I am your Quantum Guide. Ask me anything about the periodic table, elements, or chemical reactions!
                    </p>
                  </div>
                )}

                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                        m.role === "user"
                          ? "bg-purple-600/20 border border-purple-500/30 text-purple-100 rounded-tr-sm"
                          : "bg-slate-800/60 border border-slate-700/50 text-slate-200 rounded-tl-sm whitespace-pre-wrap"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800/60 border border-slate-700/50 text-slate-200 rounded-2xl rounded-tl-sm p-4 flex gap-1 items-center">
                      <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                      <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                      <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div 
                className="p-3 bg-slate-900/80 border-t border-purple-500/20 backdrop-blur-md"
                onPointerDown={(e) => e.stopPropagation()} // Prevent dragging from input
              >
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2 bg-slate-950 border border-slate-700/50 rounded-full pl-4 pr-1.5 py-1.5 focus-within:border-cyan-500/50 focus-within:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask a chemistry question..."
                    className="flex-1 bg-transparent text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="p-2 rounded-full bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

// Simple Atom SVG Component for the header
function AtomIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="1"></circle>
      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path>
      <path d="M15.7 3.8c-2.04-2.03-7.36-.02-11.9 4.5-4.54 4.52-6.54 9.87-4.5 11.9 2.04 2.03 7.36.02 11.9-4.5 4.54-4.52 6.54-9.87 4.5-11.9Z"></path>
    </svg>
  );
}
