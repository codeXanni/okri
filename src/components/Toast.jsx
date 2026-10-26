import { useCart } from '../lib/CartContext.jsx'
import { CheckCircle2 } from 'lucide-react'

export default function Toast() {
  const { toast, openCart, dismissToast } = useCart()
  return (
    <div className="toast-region" role="status" aria-live="polite">
      {toast && (
        <div className="toast" key={toast.id}>
          <CheckCircle2 size={18} aria-hidden="true" />
          <span>{toast.text}</span>
          <button type="button" onClick={() => { dismissToast(); openCart() }}>View cart</button>
        </div>
      )}
    </div>
  )
}
