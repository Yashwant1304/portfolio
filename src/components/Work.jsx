import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data'
import Reveal from './Reveal'

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal as="article" delay={index * 60}>
      <div className="group rule py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-12 md:gap-10">
          {/* Index */}
          <div className="md:col-span-1">
            <span className="font-mono text-xs text-ink-soft/70">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Main */}
          <div className="md:col-span-8">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-ink-soft">{project.year}</span>
            </div>

            <p className="mt-3 max-w-xl text-ink-soft text-pretty">{project.blurb}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink-soft transition-colors group-hover:border-ink/25"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Side: role + metrics */}
          <div className="md:col-span-3">
            <p className="eyebrow">Role</p>
            <p className="mt-1.5 text-sm">{project.role}</p>

            {/* metrics is optional — not every project has numbers worth showing */}
            {project.metrics?.length > 0 && (
              <div className="mt-6 space-y-3">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-xl font-medium tracking-tight">{m.value}</p>
                    <p className="text-xs text-ink-soft">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Expandable detail */}
        <div className="mt-8 grid gap-6 md:grid-cols-12 md:gap-10 md:pl-[8.333%]">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="md:col-span-8 md:col-start-2 inline-flex w-fit items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            <span
              className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-line transition-transform duration-300"
              style={{ transform: open ? 'rotate(45deg)' : 'none' }}
              aria-hidden="true"
            >
              +
            </span>
            {open ? 'Less' : 'Read the detail'}
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="detail"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-8 md:col-start-2 overflow-hidden"
              >
                <div className="pt-5">
                  <div
                    className="border-l-2 pl-5"
                    style={{ borderColor: project.accent }}
                  >
                    <p className="max-w-2xl text-ink-soft text-pretty">{project.detail}</p>
                  </div>

                  {/* links is also optional */}
                  {project.links?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith('#') ? undefined : '_blank'}
                          rel="noreferrer"
                          className="group/link text-sm font-medium"
                        >
                          <span className="border-b border-line pb-0.5 transition-colors group-hover/link:border-ink">
                            {link.label}
                          </span>
                          <span
                            className="ml-1 inline-block transition-transform duration-200 group-hover/link:translate-x-0.5"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.03em] text-balance md:text-4xl">
            Three things I built end to end.
          </h2>
        </Reveal>

        <div className="mt-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}