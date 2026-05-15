interface PSEOHeroProps {
  eyebrow: string
  h1: string
  subheadline: string
  ctaPrimary?: string
  ctaSecondary?: string
  ctaSecondaryHref?: string
}

export default function PSEOHero({
  eyebrow,
  h1,
  subheadline,
  ctaPrimary = 'Start Free Trial →',
  ctaSecondary = 'See How It Works',
  ctaSecondaryHref = '#how-it-works',
}: PSEOHeroProps) {
  return (
    <section className="bg-cream min-h-[72vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-xs font-semibold text-gold-accessible uppercase tracking-[0.2em] mb-4">
          {eyebrow}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] text-ink leading-tight text-balance mb-6">
          {h1}
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          {subheadline}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://clientintelligence.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-cream rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {ctaPrimary}
          </a>
          <a
            href={ctaSecondaryHref}
            className="border border-border rounded-full px-6 py-3 text-sm font-medium text-ink hover:bg-border/30 transition-colors"
          >
            {ctaSecondary}
          </a>
        </div>
        <p className="text-muted text-xs mt-5">
          Starter from $97/mo · Cancel anytime · Your IP stays yours
        </p>
      </div>
    </section>
  )
}
