"use client";

import { getChatbotUrl } from "@/lib/agents";
import Image from "next/image";
import { useCallback, useState } from "react";

interface ChatbotCardProps {
  agent: { id: string; name: string };
  index: number;
}

/**
 * ChatbotCard - Displays an individual chatbot agent in a card layout
 * with embedded iframe for the chat interface
 */
export const ChatbotCard = ({ agent, index }: ChatbotCardProps) => {
  const { id, name } = agent || {};
  const [isLoading, setIsLoading] = useState(true);
  const chatbotUrl = getChatbotUrl(id);

  /** Callback to handle iframe load completion */
  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Gradient colors for card header accent (cycles through for variety)
  const gradients = [
    "from-cyan-500 to-violet-600",
    "from-emerald-500 to-teal-600",
    "from-rose-500 to-pink-600",
    "from-amber-500 to-orange-600",
    "from-indigo-500 to-purple-600",
    "from-sky-500 to-blue-600",
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <div className="flex h-[500px] md:h-[600px] xl:h-[700px] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/20">
      <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
        <div
          className={`flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${gradient} p-0.5`}
        >
          <Image
            src="/logo.png"
            alt="Bot Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-white" title={name}>
            {index + 1}. {name.length > 30 ? name.slice(0, 30) + "..." : name}
          </h3>
          <p className="truncate text-xs text-zinc-500" title={id}>
            {id}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-zinc-800 px-2 py-1">
          <span
            className={`h-2 w-2 rounded-full ${
              !isLoading
                ? "animate-pulse bg-emerald-500 shadow-lg shadow-emerald-500/50"
                : "bg-amber-500"
            }`}
          />
          <span className="text-[10px] text-zinc-400">
            {!isLoading ? "Online" : "Loading"}
          </span>
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-950">
            <div role="status" className="flex flex-col items-center gap-3">
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
                  opacity="0.25"
                />
                <path
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="4"
                  strokeLinecap="round"
                  d="M12 2a10 10 0 0 1 10 10"
                />
              </svg>
              <span className="text-xs text-zinc-500">Connecting...</span>
            </div>
          </div>
        )}

        <iframe
          src={chatbotUrl}
          id={`chatbot-iframe-${id}`}
          className="h-full w-full border-0"
          onLoad={handleLoad}
          title={`Chatbot ${name}`}
        />
      </div>
    </div>
  );
};
