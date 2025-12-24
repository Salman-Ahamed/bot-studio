import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getFirstAgentFromEnv } from "@/lib/agents";
import { PackageChatbot } from "./_components/package-chatbot";

/**
 * Package Page - Server Component
 * Demonstrates the SmythBot React component from smythos-chatbot-test package
 * Agent ID is loaded from environment variables (NOT exposed to client bundle)
 */
const PackagePage = () => {
  // Server-side only - get first agent from env
  const agent = getFirstAgentFromEnv();

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      {/* Header */}
      <Header agentCount={agent ? 1 : 0} mode="Package" />

      {/* Main Content */}
      {agent ? (
        <PackageChatbot agent={agent} />
      ) : (
        <main className="flex flex-1 items-center justify-center p-6">
          <div className="flex h-[400px] w-full max-w-2xl flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30">
            <span className="mb-4 text-5xl opacity-50">🤖</span>
            <h3 className="mb-2 text-lg font-medium text-zinc-400">
              No Agent Configured
            </h3>
            <p className="text-sm text-zinc-600">
              Set AGENT_LIST environment variable to get started
            </p>
          </div>
        </main>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PackagePage;
