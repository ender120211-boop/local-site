import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { useApp } from '../store/AppContext'

export default function Checkout() {
  const { cart, removeFromCart } = useApp()
  const navigate = useNavigate()
  const items = products.filter((product) => cart.includes(product.id))
  const total = items.reduce((sum, item) => sum + item.price, 0)
  const [complete, setComplete] = useState(false)
  const [errors, setErrors] = useState({})

  const submit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const next = {}
    if (!data.get('name').trim()) next.name = 'Enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get('email'))) next.email = 'Enter a valid email'
    if (!data.get('phone').trim()) next.phone = 'Enter a phone number'
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setComplete(true)
      items.forEach((item) => removeFromCart(item.id))
    }
  }

  if (complete) return (
    <section className="section success-page"><CheckCircle2 size={52} /><p className="eyebrow">DEMO ORDER COMPLETE</p><h1>Thank you.</h1><p>Your demonstration order has been recorded. No payment was taken and no files were issued.</p><button className="primary-button" onClick={() => navigate('/catalog')}>Continue browsing</button></section>
  )

  return (
    <section className="section checkout-page">
      <p className="eyebrow">DEMO CHECKOUT</p><h1>Complete your order</h1>
      <p className="demo-note">This is a demonstration checkout. No real payment will be processed.</p>
      {items.length ? (
        <form className="checkout-layout" onSubmit={submit} noValidate>
          <div className="checkout-form">
            <h2>Contact details</h2>
            <label>Full name<input name="name" placeholder="Jan Novak" />{errors.name && <span className="field-error">{errors.name}</span>}</label>
            <label>Email address<input name="email" type="email" placeholder="jan@example.com" />{errors.email && <span className="field-error">{errors.email}</span>}</label>
            <label>Phone number<input name="phone" placeholder="+420" />{errors.phone && <span className="field-error">{errors.phone}</span>}</label>
            <label>Order notes<textarea name="notes" placeholder="Anything we should know?" /></label>
            <button className="primary-button" type="submit">Place demo order — {total} Kč</button>
          </div>
          <aside className="order-summary"><h2>Your order</h2>{items.map((item) => <div key={item.id}><span>{item.name}</span><strong>{item.price} Kč</strong></div>)}<div className="summary-total"><span>Total</span><strong>{total} Kč</strong></div></aside>
        </form>
      ) : <div className="empty-state"><h2>Your cart is empty</h2><button className="primary-button" onClick={() => navigate('/catalog')}>Browse templates</button></div>}
    </section>
  )
}
