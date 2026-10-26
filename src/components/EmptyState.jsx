export default function EmptyState({ title, children, action }) {
  return (
    <div className="empty" role="status">
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11Z" /></svg>
      <h3>{title}</h3>
      <p>{children}</p>
      {action}
    </div>
  )
}
