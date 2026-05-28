'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const topics = [
  { href: '/for',          label: 'Who It\'s For',    description: 'Built for your role and practice type' },
  { href: '/vs',           label: 'Why CI',            description: 'How it compares to other tools' },
  { href: '/use-case',     label: 'How It\'s Used',   description: 'Real use cases for service providers' },
  { href: '/pain',         label: 'Solve a Problem',   description: 'The pain points Client Intelligence fixes' },
  { href: '/feature',      label: 'The Platform',      description: 'Features and capabilities' },
  { href: '/industry',     label: 'Your Industry',     description: 'Built for your type of business' },
  { href: '/alternatives', label: 'Switching From',    description: 'Moving away from generic AI tools' },
  { href: '/category',     label: 'What Is IaaS?',    description: 'Intelligence as a Service, defined' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Home */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-px h-5 bg-ink/20 group-hover:bg-gold transition-colors" />
          <span className="text-base font-semibold text-ink tracking-tight">
            Client Intelligence
          </span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Topics dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors"
            >
              Explore
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
                {topics.map((topic, i) => (
                  <Link
                    key={topic.href}
                    href={topic.href}
                    onClick={() => setOpen(false)}
                    className={`block px-5 py-3.5 hover:bg-card-bg transition-colors ${i < topics.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <p className="text-sm font-semibold text-ink">{topic.label}</p>
                    <p className="text-xs text-muted mt-0.5">{topic.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="https://clientintelligence.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-ink text-cream px-4 py-2 rounded-full hover:bg-ink/80 transition-colors whitespace-nowrap"
          >
            Learn More →
          </a>
        </div>

      </nav>
    </header>
  )
}
