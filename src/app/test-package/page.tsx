"use client";

/**
 * Test Page for smythos-chatbot-test npm package
 *
 * This page demonstrates using the SmythBot React component
 * instead of the embed script approach.
 */

import dynamic from "next/dynamic";

/**
 * Dynamic import SmythBot with SSR disabled
 *
 * This is required because SmythBot injects CSS into document.head
 * which doesn't exist during server-side rendering.
 */
const SmythBot = dynamic(
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
        mode="inline"
        enableDebugLogs
        enableMetaMessages
        allowAttachments
        // colors={{
        //   chatWindowColors: {
        //     backgroundColor: "#09090b",
        //     headerBackgroundColor: "#18181b",
        //     footerBackgroundColor: "#18181b",
        //   },
        // }}
        onReady={() => console.log("SmythBot is ready!")}
      />
    </div>
  );
};

export default TestPackagePage;
