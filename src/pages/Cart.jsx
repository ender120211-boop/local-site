import { ArrowRight, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { useApp } from '../store/AppContext'
import Seo from '../components/Seo'

export default function Cart() {
  const { cart, removeFromCart } = useApp()
  const items = products.filter((product) => cart.includes(product.id))
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <section className="section cart-page">
      <Seo title="Shopping cart — LOCAL SITE" description="Review your selected LOCAL SITE website templates." />
      <p className="eyebrow">YOUR SELECTION</p>
      <h1>Shopping cart</h1>
      {items.length ? (
        <div className="cart-layout">
          <div className="cart-list">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <Link to={`/template/${item.id}`}><img src={item.image} alt={item.name} /></Link>
                <div><p className="eyebrow">{item.category}</p><Link to={`/template/${item.id}`}><h3>{item.name}</h3></Link></div>
                <p className="cart-price">{item.price} Kč</p>
                <button className="remove-button" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`}><Trash2 size={18} /></button>
              </article>
            ))}
          </div>
          <aside className="order-summary">
            <h2>Summary</h2><div><span>Subtotal</span><strong>{total} Kč</strong></div><div><span>Taxes</span><strong>Calculated later</strong></div>
            <div className="summary-total"><span>Total</span><strong>{total} Kč</strong></div>
            <Link className="primary-button" to="/checkout">Continue <ArrowRight size={18} /></Link>
          </aside>
        </div>
      ) : <div className="empty-state"><h2>Your cart is empty</h2><p>Explore our collection and find a template for your business.</p><Link className="primary-button" to="/catalog">Browse templates <ArrowRight size={18} /></Link></div>}
    </section>
  )
}
