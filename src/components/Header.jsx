import { useEffect, useState } from 'react'
import { nav, profile } from '../data'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  // Elevation + reading-progress bar
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)

      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(y / max, 1) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-paper/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-ink transition-opacity hover:opacity-60"
        >
          {profile.initials}
          <span className="ml-1.5 text-ink-soft">/ {profile.role}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === item.id
                  ? 'bg-ink text-paper'
                  : 'text-ink-soft hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-line px-3.5 py-1.5 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-paper"
        >
          Email
        </a>
      </div>

      {/* Reading progress */}
      <div
        className="h-px origin-left bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
    </header>
  )
}