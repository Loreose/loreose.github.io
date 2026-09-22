import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-16 bg-fd-background text-fd-foreground">
      {/* Background radial grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-fd-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

      <div className="max-w-3xl text-center space-y-8">
        {/* Main Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-secondary/50 px-4 py-1.5 text-sm font-medium text-fd-secondary-foreground">
          <span>High-Performance FiveM Resources</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-gradient-to-br from-fd-foreground to-fd-muted-foreground bg-clip-text text-fd-foreground">
          Next-Gen FiveM <br />
          <span className="text-fd-primary">Script Documentation</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-fd-muted-foreground leading-relaxed">
          Comprehensive guides, event references, exports, and NUI integration guides for all custom FiveM resources and framework bridges.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-xl bg-fd-primary px-8 py-3.5 text-lg font-semibold text-fd-primary-foreground shadow-lg shadow-fd-primary/20 hover:bg-fd-primary/90 transition-colors duration-200"
          >
            Explore Docs →
          </Link>
          <a
            href="https://github.com/Loreose/loreose.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-fd-secondary px-8 py-3.5 text-lg font-semibold text-fd-secondary-foreground ring-1 ring-fd-border hover:bg-fd-secondary/80 transition-colors duration-200"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}