"use client";

/**
 * Test Page for smythos-chatbot-test npm package
 *
 * This page demonstrates using the SmythBot React component
 * instead of the embed script approach.
 *
 * NOTE: As of v0.0.2, CSS is lazy-injected on component mount,
 * so "use client" is enough - no dynamic import needed!
 */

import { SmythBot } from "smythos-chatbot-test";

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
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
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
