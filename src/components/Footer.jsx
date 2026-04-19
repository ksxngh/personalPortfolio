export default function Footer() {
  return (
    <footer style={{
      padding: '2rem',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      background: 'var(--bg)',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--text-dim)',
        letterSpacing: '0.08em',
      }}>
        © 2025 <span style={{ color: 'var(--accent)' }}>Karanveer Singh</span> — Built with React + Vite
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--text-dim)',
        letterSpacing: '0.08em',
      }}>
        ks2328679@gmail.com
      </span>
    </footer>
  )
}
