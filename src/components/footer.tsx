import Image from 'next/image';

/**
 * Footer component with SmythOS branding and logo
 */
export const Footer = () => (
  <footer className="flex items-center justify-center gap-2 border-t border-zinc-800 py-4 text-sm text-zinc-600">
    <span>Powered by</span>
    <Image
      src="/logo.png"
      alt="SmythOS Logo"
      width={20}
      height={20}
      className="inline-block"
    />
    <span className="text-cyan-500">SmythOS</span>
  </footer>
);
