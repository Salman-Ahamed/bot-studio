import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getFirstAgentFromEnv } from "@/lib/agents";
import { EmbedChatbot } from "./_components/embed-chatbot";

/**
 * Embed Page - Server Component
 * Loads the first agent from environment and passes to client component
 * Agent ID is NOT exposed in client-side JavaScript bundle
 */
const EmbedPage = () => {
  // Server-side only - get first agent from env
  const agent = getFirstAgentFromEnv();

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      {/* Header */}
      <Header agentCount={agent ? 1 : 0} mode="Embed" />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-2xl">
          {agent ? (
            <EmbedChatbot agent={agent} />
          ) : (
            <div className="flex h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30">
              <Image
                src="/logo.png"
                alt="Bot Studio Logo"
                width={80}
                height={80}
                className="mb-4 opacity-50"
              />
              <h3 className="mb-2 text-lg font-medium text-zinc-400">
                No Agent Configured
              </h3>
              <p className="text-sm text-zinc-600">
                Set AGENT_LIST environment variable to get started
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EmbedPage;
