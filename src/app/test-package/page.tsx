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
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📦</span>
          <h1 className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
            SmythBot Package Test
          </h1>
          <span className="rounded-full border border-emerald-500 bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
            npm package
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-2xl">
          {/* Info Card */}
          <div className="mb-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
            <h2 className="mb-2 text-lg font-semibold text-cyan-400">
              ✨ Using SmythBot as npm Package
            </h2>
            <p className="text-sm text-zinc-400">
              This page uses the{" "}
              <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-cyan-300">
                smythos-chatbot-test
              </code>{" "}
              npm package. No script loading needed - just import and use the
              React component!
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-900 p-3 text-xs text-zinc-300">
              {`// Next.js requires dynamic import (SSR disabled)
import dynamic from 'next/dynamic';

const SmythBot = dynamic(
  () => import('smythos-chatbot-test').then(m => m.SmythBot),
  { ssr: false }
);

<SmythBot 
  agentId="${AGENT_ID}"
  domain="${AGENT_DOMAIN}"
  mode="inline"
  enableMetaMessages
/>`}
            </pre>
          </div>

          {/* Chatbot Card */}
          <div className="flex h-[550px] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
            {/* Card Header */}
            <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600">
                <span className="text-lg">🤖</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">SmythOS Agent</h3>
                <p className="text-xs text-zinc-500">{AGENT_ID}</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-zinc-800 px-2.5 py-1">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                <span className="text-xs text-zinc-400">Online</span>
              </div>
            </div>

            {/* SmythBot Component - No loading state needed! */}
            <div className="relative flex-1 overflow-hidden bg-zinc-950">
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
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-4 text-center text-sm text-zinc-600">
        Powered by <span className="text-cyan-500">SmythOS</span> •{" "}
        <span className="text-emerald-500">smythos-chatbot-test</span> npm
        package
      </footer>
    </div>
  );
};

export default TestPackagePage;
