"use client";

import Script from "next/script";
import { useState } from "react";

/**
 * Bot Studio Home Page
 * Displays chatbots in a grid layout for testing and demonstration
 */
export default function Home() {
  const [chatbotReady, setChatbotReady] = useState(false);

  /**
   * Initializes the chatbot after the script loads
   */
  const initChatbot = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ChatBot = (window as any).ChatBot;
    if (ChatBot) {
      ChatBot.init({
        domain: "cmgeknzxreggfnp5r76sucxgu.agent.pstage.smyth.ai",
        isChatOnly: true,
        containerId: "smythos-chatbot-container",
        allowAttachments: true,
        enableMetaMessages: true,
        introMessage: "Hello, how can I assist you today?",
      });
      setChatbotReady(true);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚡</span>
          <h1 className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
            Bot Studio
          </h1>
          <span className="rounded-full border border-violet-500 bg-violet-500/20 px-2 py-0.5 text-xs text-violet-400">
            v1.0
          </span>
        </div>
        <p className="text-sm text-zinc-500">
          SmythOS Chatbot Testing Platform
        </p>
      </header>

      {/* Main Content - Chatbot Grid */}
      <main className="p-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Chatbot Card */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
            {/* Card Header */}
            <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600">
                <span className="text-lg">🤖</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">SmythOS Assistant</h3>
                <p className="text-xs text-zinc-500">
                  General purpose AI assistant
                </p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-zinc-800 px-2.5 py-1">
                <span
                  className={`h-2 w-2 rounded-full ${
                    chatbotReady
                      ? "animate-pulse bg-emerald-500 shadow-lg shadow-emerald-500/50"
                      : "bg-amber-500"
                  }`}
                />
                <span className="text-xs text-zinc-400">
                  {chatbotReady ? "Online" : "Loading..."}
                </span>
              </div>
            </div>

            {/* Chatbot Container */}
            <div className="relative min-h-[500px] bg-zinc-950">
              <div id="smythos-chatbot-container" className="h-full w-full" />

              {/* Loading Overlay */}
              {!chatbotReady && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-zinc-950/90">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-700 border-t-cyan-500" />
                  <span className="text-sm text-zinc-500">
                    Initializing chatbot...
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-4 text-center text-sm text-zinc-600">
        Powered by <span className="text-cyan-500">SmythOS</span>
      </footer>

      {/* Load Chatbot Script */}
      <Script
        src="https://cmgeknzxreggfnp5r76sucxgu.agent.pstage.smyth.ai/static/embodiment/chatBot/chatbot-v2.js"
        onLoad={initChatbot}
        strategy="afterInteractive"
      />
    </div>
  );
}
