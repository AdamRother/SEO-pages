import Link from 'next/link'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-px h-5 bg-ink/20 group-hover:bg-gold transition-colors" />
          <span className="text-base font-semibold text-ink tracking-tight">
            Client Intelligence
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/for"
            className="hidden sm:block text-sm text-muted hover:text-ink transition-colors"
          >
            Who It's For
          </Link>
          <Link
            href="/vs"
            className="hidden sm:block text-sm text-muted hover:text-ink transition-colors"
          >
            Why CI
          </Link>
          <a
            href="https://clientintelligence.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-ink text-cream px-3 sm:px-4 py-2 rounded-full hover:bg-ink/80 transition-colors whitespace-nowrap"
          >
            <span className="sm:hidden">Learn More →</span>
            <span className="hidden sm:inline">Learn More →</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
