import { profile, footer } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="rule">
      <div className="shell flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-ink-soft">
          © {year} {profile.name}. {footer.note}
        </p>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              Back to top ↑
            </button>
          </li>
        </ul>
      </div>
    </footer>
  )
}