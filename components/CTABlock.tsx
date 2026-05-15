interface CTABlockProps {
  headline: string
  subtext?: string
  cta?: string
}

export default function CTABlock({
  headline,
  subtext = 'Starter plan from $97/mo  -  no commitment, no hype.',
  cta = 'Start Free Trial →',
}: CTABlockProps) {
  return (
    <section className="bg-[#1C1700] px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl text-white leading-tight mb-4 text-balance">
          {headline}
        </h2>
        {subtext && (
          <p className="text-white/60 text-sm mb-8 leading-relaxed">{subtext}</p>
        )}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://clientintelligence.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1C1700] rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {cta}
          </a>
          <a
            href="https://clientintelligence.ai/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 text-white rounded-full px-6 py-3 text-sm font-medium hover:border-white/60 transition-colors"
          >
            See Pricing
          </a>
        </div>
        <p className="text-white/40 text-xs mt-5">Cancel anytime · Your IP stays yours</p>
      </div>
    </section>
  )
}
