import { Download, Heart, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useApp } from '../store/AppContext'

export default function ProductCard({ product }) {
  const { favorites, toggleFavorite } = useApp()
  const saved = favorites.includes(product.id)

  return (
    <article className="product-card">
      <div className="product-preview">
        <img src={product.image} alt={product.name} />
        {product.badge && <span className={`badge ${product.badge.toLowerCase()}`}>{product.badge}</span>}
        <button className={saved ? 'favorite active' : 'favorite'} onClick={() => toggleFavorite(product)} aria-label={saved ? 'Remove from favorites' : 'Add to favorites'}>
          <Heart size={18} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <Link className="preview-link" to={`/template/${product.id}`}>
          View template <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="product-info">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3>{product.name}</h3>
          <p className="card-description">{product.description}</p>
        </div>
        <p className="price">{product.price} <span>Kč</span></p>
      </div>
      <div className="card-actions">
        <Link className="card-demo" to={`/demo/${product.id}`}>Live Demo <ArrowUpRight size={15} /></Link>
        <a className="card-download" href={`/downloads/${product.id}.zip`} download>
          <Download size={15} /> DEMO ZIP
        </a>
      </div>
    </article>
  )
}
