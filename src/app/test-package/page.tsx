"use client";

/**
 * Test Page for smythos-chatbot-test npm package (v2.5.1+)
 *
 * This page demonstrates using the SmythBot React component.
 * With v2.5.1, direct import works - no dynamic import needed!
 *
 * CSS is automatically injected when the component mounts.
 */

import { SmythBot } from "smythos-chatbot-test";

/** Agent configuration */
const AGENT_ID = "cmil944nr70e8fzilkr0w632v";
const AGENT_DOMAIN = `${AGENT_ID}.agent.pstage.smyth.ai`;

/**
 * Test Package Page
 *
 * Demonstrates the new React component approach for embedding SmythBot.
 * No script loading or dynamic import needed - just import and use!
 */
const TestPackagePage = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* SmythBot Component - Simple usage without ref */}
      <SmythBot
        agentId={AGENT_ID}
        domain={AGENT_DOMAIN}
        mode="widget"
        enableDebugLogs
        enableMetaMessages
        allowAttachments
        onReady={() => console.log("✅ SmythBot is ready!")}
      />
    </div>
  );
};

export default TestPackagePage;
