import { useState } from 'react'
import './index.css'

function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (e) => {
    e?.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError('')
    setResults([])

    try {
      const response = await fetch(`http://localhost:3001/api/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()

      if (data.results) {
        setResults(data.results)
      } else {
        setError('No results found')
      }
    } catch (err) {
      setError('Failed to connect to search server')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Movie Linker</h1>
        <p style={{ color: 'var(--text-muted)' }}>Find your favorite movies with ease</p>
      </header>

      <form className="search-box" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies, series..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      )}

      {error && (
        <p style={{ color: 'var(--accent)', marginBottom: '2rem' }}>{error}</p>
      )}

      <div className="results-grid">
        {results.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.title}</h3>
            <p className="info">{item.info}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Get Download Link
            </a>
          </div>
        ))}
      </div>

      {!loading && results.length === 0 && query && !error && (
        <p style={{ color: 'var(--text-muted)' }}>Type something to start searching...</p>
      )}
    </div>
  )
}

export default App
