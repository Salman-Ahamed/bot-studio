import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getAgentsFromEnv } from "@/lib/agents";
import Image from "next/image";
import { ChatbotCard } from "./_components/card";

/**
 * Home Page - Server Component
 * Loads agent configuration from server-side environment variables
 * Agent IDs are NOT exposed in client-side JavaScript bundle
 */
const Home = () => {
  // Server-side only - this code runs on the server
  const agents = getAgentsFromEnv();
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <Header agentCount={agents.length} mode="Multi-Agent" />

      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent, i) => (
            <ChatbotCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>

        {agents.length === 0 && (
          <div className="flex h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30">
            <Image
              src="/logo.png"
              alt="Bot Studio Logo"
              width={80}
              height={80}
              className="mb-4 opacity-50"
            />
            <h3 className="mb-2 text-lg font-medium text-zinc-400">
              No Agents Configured
            </h3>
            <p className="text-sm text-zinc-600">
              Set AGENT_LIST environment variable to get started
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
