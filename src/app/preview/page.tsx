"use client";

import { useState } from "react";

/**
 * Agent configuration
 */
const AGENT_ID = "cmihqutkz6qoz9cq3tln7ltsr";

/**
 * Generates chatbot URL from agent ID
 */
function getChatbotUrl(agentId: string): string {
  return `https://${agentId}.agent.pstage.smyth.ai/chatBot?allowAttachments=true`;
}

/**
 * Preview Page - Chatbot Preview
 * Clean preview of a single chatbot
 */
const PreviewPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const chatbotUrl = getChatbotUrl(AGENT_ID);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-2xl">👁️</span>
          <h1 className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
            Bot Studio - Preview
          </h1>
          <span className="rounded-full border border-emerald-500 bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
            Preview Mode
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-2xl">
          {/* Chatbot Card */}
          <div className="flex h-[600px] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
            {/* Card Header */}
            <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
                <span className="text-lg">🤖</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Preview Agent</h3>
                <p className="text-xs text-zinc-500">{AGENT_ID}</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-zinc-800 px-2.5 py-1">
                <span
                  className={`h-2 w-2 rounded-full ${
                    !isLoading
                      ? "animate-pulse bg-emerald-500 shadow-lg shadow-emerald-500/50"
                      : "bg-amber-500"
                  }`}
                />
                <span className="text-xs text-zinc-400">
                  {!isLoading ? "Online" : "Loading..."}
                </span>
              </div>
            </div>

            {/* Chatbot Container */}
            <div className="relative flex-1 overflow-hidden">
              {/* Loading Spinner */}
              {isLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-950">
                  <div role="status">
                    <svg
                      className="h-8 w-8 animate-spin"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#10b981"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}

              {/* Chatbot Iframe */}
              <iframe
                src={chatbotUrl}
                id={`chatbot-iframe-${AGENT_ID}`}
                className="h-full w-full border-0"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-4 text-center text-sm text-zinc-600">
        Powered by <span className="text-cyan-500">SmythOS</span>
      </footer>
    </div>
  );
};

export default PreviewPage;

