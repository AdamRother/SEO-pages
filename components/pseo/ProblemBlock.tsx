interface ProblemBlockProps {
  pain: string
  bullets: string[]
  headline?: string
}

export default function ProblemBlock({ pain, bullets, headline = 'The problem' }: ProblemBlockProps) {
  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="font-serif text-2xl sm:text-3xl text-ink mb-6 leading-tight">
        {headline}
      </h2>
      <p className="text-muted leading-relaxed mb-8">{pain}</p>
      <ul className="space-y-3">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3 text-muted">
            <span className="mt-1 text-gold-accessible text-sm flex-shrink-0">✕</span>
            <span className="leading-relaxed text-sm">{bullet}</span>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}
