interface CTABlockProps {
  headline: string
  subtext?: string
  cta?: string
}

export default function CTABlock({
  headline,
  subtext = 'Built for service providers serious about scaling their methodology.',
  cta = 'Learn More →',
}: CTABlockProps) {
  return (
    <section className="bg-[#1C1700] px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight mb-4 text-balance">
          {headline}
        </h2>
        {subtext && (
          <p className="text-white/60 text-sm mb-8 leading-relaxed">{subtext}</p>
        )}
        <div className="flex items-center justify-center">
          <a
            href="https://clientintelligence.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1C1700] rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {cta}
          </a>
        </div>
        <p className="text-white/40 text-xs mt-5">Cancel anytime · Your IP stays yours</p>
      </div>
    </section>
  )
}
