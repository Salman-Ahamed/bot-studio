import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ChatbotCard } from "./_components/card";

/** Agent configuration type */
interface Agent {
  id: string;
  name: string;
}

/**
 * Parses agent list from environment variable
 * Format: "id1:name1,id2:name2,..."
 * @returns Array of agent objects with id and name
 */
function getAgentsFromEnv(): Agent[] {
  const agentList = process.env.AGENT_LIST ?? "";

  if (!agentList.trim()) {
    return [];
  }

  return agentList
    .split(",")
    .map((entry) => {
      const [id, name] = entry.split(":");
      // Skip invalid entries that don't have both id and name
      if (!id?.trim() || !name?.trim()) {
        return null;
      }
      return { id: id.trim(), name: name.trim() };
    })
    .filter((agent): agent is Agent => agent !== null);
}

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
      <Header agentCount={agents.length} />

      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent, i) => (
            <ChatbotCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>

        {agents.length === 0 && (
          <div className="flex h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30">
            <span className="mb-4 text-5xl opacity-50">🤖</span>
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
