"use client";

import dynamic from "next/dynamic";
import type { ISmythBotProps } from "smythos-chatbot-test";
import { getAgentDomain, type Agent } from "@/lib/agents";

/**
 * Dynamic import SmythBot with SSR disabled
 *
 * This is required because SmythBot injects CSS into document.head
 * which doesn't exist during server-side rendering.
 *
 * Note: We import the type separately to get proper TypeScript suggestions.
 */
const SmythBot = dynamic<ISmythBotProps>(
  () => import("smythos-chatbot-test").then((mod) => mod.SmythBot),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
      </div>
    ),
  }
);

interface PackageChatbotProps {
  agent: Agent;
}

/**
 * Package Chatbot Client Component
 * Uses the SmythBot React component from smythos-chatbot-test package
 */
export const PackageChatbot = ({ agent }: PackageChatbotProps) => {
  const agentDomain = getAgentDomain(agent.id);

  return (
    <SmythBot
      agentId={agent.id}
      domain={agentDomain}
      mode="widget"
      enableDebugLogs
      enableMetaMessages
      allowAttachments
      onReady={() => console.log("SmythBot is ready!")}
    />
  );
};

