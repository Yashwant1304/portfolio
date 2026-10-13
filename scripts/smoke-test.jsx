// Renders the whole app to a string and checks every section actually made it
// into the output. A missing `metrics` key or similar throws here, which is
// the failure a plain `vite build` does not catch.
import { renderToString } from 'react-dom/server'
import { createElement } from 'react'
import App from '../src/App.jsx'
import { projects, nav } from '../src/data.js'

const html = renderToString(createElement(App))

// React escapes &, <, > etc. — compare against the escaped form
const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const required = ['Yashwant Kumar Singh', 'Java Developer', 'yksinghemail@gmail.com']

for (const needle of required) {
  if (!html.includes(esc(needle))) throw new Error(`Missing from render: ${needle}`)
}

// Every project title must be present — catches a card silently blowing up
for (const p of projects) {
  if (!html.includes(esc(p.title))) throw new Error(`Project not rendered: ${p.title}`)
}

// Every nav target must exist as a section id
const ids = [...html.matchAll(/<section id="([^"]+)"/g)].map((m) => m[1])
console.log('sections rendered:', ids.join(', '))

for (const item of nav) {
  if (!ids.includes(item.id)) throw new Error(`Nav points at missing section: ${item.id}`)
}

console.log(`\nOK — rendered ${html.length} chars, ${ids.length} sections, no errors.`)