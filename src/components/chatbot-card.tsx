"use client";

import { useState } from "react";

/**
 * Generates chatbot URL from agent ID
 * @param agentId - The unique agent identifier
 * @returns Full chatbot URL
 */
function getChatbotUrl(agentId: string): string {
  return `https://${agentId}.agent.pstage.smyth.ai/chatBot?allowAttachments=true`;
}

/**
 * ChatbotCard Component Props
 */
interface ChatbotCardProps {
  /** Unique agent identifier */
  agentId: string;
  /** Card index for display numbering */
  index: number;
}

/**
 * ChatbotCard Component
 * Renders a single chatbot iframe with header and loading state
 */
export function ChatbotCard({ agentId, index }: ChatbotCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const chatbotUrl = getChatbotUrl(agentId);

  return (
    <div className="flex h-[600px] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
      {/* Card Header */}
      <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600">
          <span className="text-lg">🤖</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white">Agent #{index + 1}</h3>
          <p className="text-xs text-zinc-500">{agentId}</p>
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
                  stroke="#0ea5e9"
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
          id={`chatbot-iframe-${agentId}`}
          className="h-full w-full border-0"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}

