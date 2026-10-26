import { useId } from 'react'

export default function Field({ label, error, required, hint, children, className = '' }) {
  const id = useId()
  const describedBy = [error ? `${id}-e` : null, hint ? `${id}-h` : null].filter(Boolean).join(' ') || undefined
  return (
    <div className={`field${error ? ' has-error' : ''} ${className}`}>
      <label htmlFor={id}>{label}{required ? <span className="req" aria-hidden="true"> *</span> : <span className="opt"> (optional)</span>}</label>
      {children({ id, 'aria-invalid': error ? 'true' : undefined, 'aria-describedby': describedBy, 'aria-required': required || undefined })}
      {hint && <p className="hint" id={`${id}-h`}>{hint}</p>}
      {error && <p className="err" id={`${id}-e`}>{error}</p>}
    </div>
  )
}
