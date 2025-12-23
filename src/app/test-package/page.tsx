"use client";

/**
 * Test Page for smythos-chatbot-test npm package
 *
 * This page demonstrates using the SmythBot React component
 * instead of the embed script approach.
 */

import dynamic from "next/dynamic";
import type { ISmythBotProps } from "smythos-chatbot-test";

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

/** Agent configuration */
const AGENT_ID = "cmil944nr70e8fzilkr0w632v";
const AGENT_DOMAIN = `${AGENT_ID}.agent.pstage.smyth.ai`;

/**
 * Test Package Page
 *
 * Demonstrates the new React component approach for embedding SmythBot.
 * No script loading needed - just import and use!
 */
const TestPackagePage = () => {
  return (
    <div className="min-h-screen">
      <SmythBot
        agentId={AGENT_ID}
        domain={AGENT_DOMAIN}
        mode="widget"
        enableDebugLogs
        enableMetaMessages
        allowAttachments
        onReady={() => console.log("SmythBot is ready!")}
      />
    </div>
  );
};

export default TestPackagePage;
