/*
  Technical-drawing dimension line — end ticks, arrowheads, and a label
  breaking the line. Horizontal by default; `vertical` reads bottom-to-top.
*/
export default function Dimension({ label, vertical = false, className = '', style }) {
  return (
    <div className={`dim ${vertical ? 'dim-v' : 'dim-h'} ${className}`} style={style}>
      <span className="dim-arrow start" />
      <span className="dim-text">{label}</span>
      <span className="dim-arrow end" />
    </div>
  )
}
