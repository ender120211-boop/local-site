import { ArrowLeft, Check, Download, ExternalLink, Heart, ShoppingBag } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useApp } from '../store/AppContext'
import Seo from '../components/Seo'

export default function Product() {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)
  const { favorites, cart, toggleFavorite, addToCart } = useApp()
  if (!product) return <div className="section empty-state"><h1>Template not found</h1><Link className="text-link" to="/catalog">Back to catalog</Link></div>
  const saved = favorites.includes(product.id)
  const inCart = cart.includes(product.id)

  return (
    <section className="section product-page">
      <Seo title={`${product.name} — LOCAL SITE template`} description={product.description} />
      <Link className="back-link" to="/catalog"><ArrowLeft size={17} /> All templates</Link>
      <div className="product-layout">
        <div className="large-preview">
          <div className="browser-bar"><i /><i /><i /></div>
          <img src={product.image} alt={`${product.name} live preview`} />
        </div>
        <aside className="product-summary">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="summary-price">{product.price} <span>Kč</span></p>
          <p className="summary-description">{product.description}</p>
          <ul className="feature-list">
            {product.features.map((feature) => <li key={feature}><Check size={16} /> {feature}</li>)}
          </ul>
          <div className="summary-actions">
            <Link className="secondary-button" to={`/demo/${product.id}`}>Live Preview <ExternalLink size={17} /></Link>
            <a className="download-button" href={`/downloads/${product.id}.zip`} download>
              <Download size={17} /> DEMO Download ZIP
            </a>
            <button className="primary-button" onClick={() => addToCart(product)}>
              {inCart ? <Check size={18} /> : <ShoppingBag size={18} />} {inCart ? 'In cart' : 'Buy Template'}
            </button>
          </div>
          <button className="favorite-text" onClick={() => toggleFavorite(product)}><Heart size={17} fill={saved ? 'currentColor' : 'none'} /> {saved ? 'Saved to favorites' : 'Save to favorites'}</button>
        </aside>
      </div>
    </section>
  )
}
