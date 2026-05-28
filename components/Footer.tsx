import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1C1700] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 mb-8">
          {/* Brand */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-px h-4 bg-white/20" />
              <span className="text-sm font-semibold text-white/70">Client Intelligence</span>
            </div>
            <p className="text-white/40 text-xs max-w-xs leading-relaxed">
              Intelligence as a Service for consultants, agencies, coaches, and fractional executives.
            </p>
          </div>

          {/* Built For column */}
          <div>
            <p className="text-white/40 text-xs uppercase tracking-wide mb-3">Built For</p>
            <ul className="space-y-2">
              <li><Link href="/for" className="text-white/60 text-xs hover:text-white/90 transition-colors">All Personas →</Link></li>
              <li><Link href="/vs" className="text-white/60 text-xs hover:text-white/90 transition-colors">Comparisons →</Link></li>
              <li><Link href="/use-case" className="text-white/60 text-xs hover:text-white/90 transition-colors">Use Cases →</Link></li>
              <li><Link href="/category/intelligence-as-a-service" className="text-white/60 text-xs hover:text-white/90 transition-colors">What is IaaS? →</Link></li>
            </ul>
          </div>

          {/* Explore column */}
          <div>
            <p className="text-white/40 text-xs uppercase tracking-wide mb-3">Explore</p>
            <ul className="space-y-2">
              <li><Link href="/industry" className="text-white/60 text-xs hover:text-white/90 transition-colors">By Industry →</Link></li>
              <li><Link href="/pain" className="text-white/60 text-xs hover:text-white/90 transition-colors">By Pain Point →</Link></li>
              <li><Link href="/feature" className="text-white/60 text-xs hover:text-white/90 transition-colors">Features →</Link></li>
              <li><Link href="/alternatives" className="text-white/60 text-xs hover:text-white/90 transition-colors">Alternatives →</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5 text-xs text-white/60">
            <a href="https://clientintelligence.ai/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white/90 transition-colors">Privacy Policy</a>
            <a href="https://clientintelligence.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white/90 transition-colors">Terms of Service</a>
            <a href="mailto:support@clientintelligence.ai" className="hover:text-white/90 transition-colors">Contact</a>
          </div>
          <p className="text-white/50 text-xs">© 2026 Client Intelligence</p>
        </div>
      </div>
    </footer>
  )
}
