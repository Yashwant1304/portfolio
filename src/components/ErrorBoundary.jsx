import { Component } from 'react'

/**
 * Catches render errors so a mistake in data.js blanks one section
 * instead of the entire page.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="shell py-16">
          <p className="eyebrow">Something went wrong</p>
          <p className="mt-3 text-ink-soft">
            This section failed to render. Check the console for details.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-paper-dim p-4 font-mono text-xs text-ink-soft">
            {String(this.state.error?.message ?? this.state.error)}
          </pre>
        </div>
      )
    }

    return this.props.children
  }
}