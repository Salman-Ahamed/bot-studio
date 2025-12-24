# Bot Studio

A modern SmythOS chatbot testing and demonstration platform built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Features

- **Multi-Agent Dashboard** - Display multiple chatbot agents in a responsive grid layout
- **Multiple Display Modes** - Embed, Widget, and Package integration options
- **Secure Configuration** - Agent IDs loaded server-side (not exposed to client bundle)
- **Modern UI** - Dark theme with gradient accents and smooth animations
- **SmythOS Integration** - Uses `smythos-chatbot-test` package for chatbot components

## Display Modes

| Route      | Mode        | Description                                   |
| ---------- | ----------- | --------------------------------------------- |
| `/`        | Multi-Agent | Grid display of all configured agents         |
| `/embed`   | Embed       | Single agent iframe embed                     |
| `/widget`  | Widget      | Widget-style chatbot display                  |
| `/package` | Package     | SmythBot React component from smythos-chatbot |

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Required: Base domain for agent endpoints
NEXT_PUBLIC_AGENT_BASE_DOMAIN=agent.pstage.smyth.ai

# Required: Comma-separated list of agents (format: id:name)
AGENT_LIST=agent-id-1:Agent Name 1,agent-id-2:Agent Name 2
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Package manager (bun recommended)

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build for Production

```bash
# Create production build
bun run build

# Start production server
bun run start
```

## Project Structure

```
src/
├── app/
│   ├── _components/     # Home page components
│   ├── embed/           # Embed mode page
│   ├── widget/          # Widget mode page
│   ├── package/         # Package mode page
│   └── page.tsx         # Multi-agent dashboard
├── components/          # Shared components (Header, Footer)
└── lib/
    └── agents.ts        # Agent configuration utilities
```

## Tech Stack

- **Framework**: Next.js 16.1.1
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Chatbot**: smythos-chatbot-test

## License

MIT © [Salman Ahamed](https://github.com/Salman-Ahamed)
