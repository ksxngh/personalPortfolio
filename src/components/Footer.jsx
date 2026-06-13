export default function Footer() {
  return (
    <footer className="shell" style={{
      padding: 'var(--s-36) var(--s-30)',
      borderTop: '1px solid var(--hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--s-18)',
    }}>
      <span style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--color-smoke)' }}>
        © 2026 <span style={{ color: 'var(--color-bone)' }}>Karanveer Singh</span> — Built with React + Vite
      </span>
      <span style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--color-smoke)' }}>
        Surrey, BC · ks2328679@gmail.com
      </span>
    </footer>
  )
}
