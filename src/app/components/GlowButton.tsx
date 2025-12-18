import Link from "next/link";

export default function GlowButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
        relative px-8 py-3 bg-purple-600 text-white font-medium
        rounded-xl transition-all
        hover:bg-purple-700
        shadow-[0_0_20px_rgba(168,85,247,0.5)]
        hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]
        before:absolute before:inset-0 before:rounded-xl before:bg-purple-600/30 before:blur-xl before:opacity-60 before:animate-pulse
      "
    >
      {children}
    </Link>
  );
}
