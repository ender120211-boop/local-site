import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { useApp } from '../store/AppContext'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'

export default function Favorites() {
  const { favorites } = useApp()
  const items = products.filter((product) => favorites.includes(product.id))
  return (
    <section className="section">
      <Seo title="Favorites — LOCAL SITE" description="Review your saved LOCAL SITE website templates." />
      <p className="eyebrow">SAVED COLLECTION</p><h1>Favorites</h1>
      {items.length ? <div className="product-grid favorites-grid">{items.map((product) => <ProductCard key={product.id} product={product} />)}</div> :
        <div className="empty-state"><h2>No favorites yet</h2><p>Save templates you would like to revisit.</p><Link className="primary-button" to="/catalog">Explore templates <ArrowRight size={18} /></Link></div>}
    </section>
  )
}
