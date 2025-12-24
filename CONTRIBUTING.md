# Contributing to Bot Studio

Thank you for your interest in contributing to Bot Studio! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions. We welcome contributors of all experience levels.

## Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- Git
- A code editor (VS Code recommended)

### Development Setup

1. **Fork the repository**

   Click the "Fork" button on GitHub to create your own copy.

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/bot-studio.git
   cd bot-studio
   ```

3. **Install dependencies**

   ```bash
   bun install
   ```

4. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   NEXT_PUBLIC_AGENT_BASE_DOMAIN=agent.pstage.smyth.ai
   AGENT_LIST=your-agent-id:Your Agent Name
   ```

5. **Start development server**

   ```bash
   bun run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

## How to Contribute

### Reporting Bugs

1. Check if the issue already exists in [GitHub Issues](https://github.com/Salman-Ahamed/bot-studio/issues)
2. If not, create a new issue with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, browser, Node version)

### Suggesting Features

1. Open a [GitHub Issue](https://github.com/Salman-Ahamed/bot-studio/issues/new) with the `enhancement` label
2. Describe the feature and its use case
3. Include mockups or examples if possible

### Submitting Code

1. **Create a branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**

   Follow the code style guidelines below.

3. **Test your changes**

   ```bash
   bun run build
   bun run lint
   ```

4. **Commit your changes**

   Use clear, descriptive commit messages:

   ```bash
   git commit -m "feat: add new widget display mode"
   git commit -m "fix: resolve iframe loading state issue"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/) format:

   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

5. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**

   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template with details about your changes

## Code Style Guidelines

### TypeScript

- Use strict TypeScript notation
- Define types/interfaces for all data structures
- Avoid `any` type
- Avoid non-null assertion operator (`!`)
- Avoid casting to unknown (`as unknown as T`)

```typescript
// ✅ Good
interface Agent {
  id: string;
  name: string;
}

const agent: Agent = { id: "123", name: "My Agent" };

// ❌ Bad
const agent: any = { id: "123", name: "My Agent" };
```

### Strings

- Use single quotes (`'`) for strings
- Use template literals for string interpolation

```typescript
// ✅ Good
const greeting = "Hello";
const message = `Welcome, ${userName}!`;

// ❌ Bad
const greeting = "Hello";
const message = "Welcome, " + userName + "!";
```

### Components

- Use functional components with TypeScript
- Include JSDoc comments for complex components
- Keep components focused and single-purpose

```typescript
/**
 * ChatbotCard - Displays an individual chatbot agent
 * @param agent - Agent configuration object
 * @param index - Position index for styling
 */
export const ChatbotCard = ({ agent, index }: ChatbotCardProps) => {
  // Component implementation
};
```

### File Naming

- Components: `PascalCase.tsx` (e.g., `ChatbotCard.tsx`)
- Utilities: `kebab-case.ts` (e.g., `agents.ts`)
- Pages: `page.tsx` (Next.js App Router convention)

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use consistent spacing and color tokens

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── _components/     # Page-specific components
│   ├── embed/           # Embed mode
│   ├── widget/          # Widget mode
│   ├── package/         # Package mode
│   └── page.tsx         # Home page (Multi-Agent)
├── components/          # Shared components
└── lib/                 # Utility functions
```

## Pull Request Review Process

1. Maintainers will review your PR within a few days
2. Address any requested changes
3. Once approved, your PR will be merged

## Questions?

Feel free to open an issue or reach out if you have any questions!

---

Thank you for contributing to Bot Studio! 🚀
