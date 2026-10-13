import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Credentials from './components/Credentials'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

// Each section is wrapped so a mistake in one cannot blank the whole page.
const guarded = (Section) => (
  <ErrorBoundary key={Section.name}>
    <Section />
  </ErrorBoundary>
)

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      <Header />

      <main>
        {guarded(Hero)}
        {guarded(Work)}
        {guarded(About)}
        {guarded(Credentials)}
        {guarded(Stack)}
        {guarded(Contact)}
      </main>

      <Footer />
    </>
  )
}