import { ArrowRight, Check, ShoppingBag, WandSparkles, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <>
      <Seo title="LOCAL SITE — Premium website templates" description="Browse premium, responsive HTML website templates for barbers, beauty studios, automotive businesses and restaurants." />
      <section className="hero">
        <p className="hero-kicker">Independent website templates / 2026 collection</p>
        <h1>Websites that make your<br /><em>business look better.</em></h1>
        <p className="hero-copy">Considered, responsive HTML templates for local businesses that want a polished presence without starting from a blank page.</p>
        <div className="hero-actions">
          <Link className="primary-button" to="/catalog">Browse Templates <ArrowRight size={18} /></Link>
          <Link className="hero-secondary" to="/about">About LOCAL SITE</Link>
        </div>
        <div className="hero-art" aria-label="Featured website previews">
          <div className="browser browser-left"><img src={products[2].image} alt="Beauty template preview" /></div>
          <div className="browser browser-center"><img src={products[0].image} alt="Barber template preview" /></div>
          <div className="browser browser-right"><img src={products[6].image} alt="Restaurant template preview" /></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><p className="eyebrow">CURATED COLLECTION</p><h2>Popular templates</h2></div>
          <Link className="text-link" to="/catalog">View all <ArrowRight size={16} /></Link>
        </div>
        <div className="product-grid">
          {products.filter((item) => item.badge === 'Popular').slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="section benefits">
        <div className="benefit"><WandSparkles /><div><h3>Designed to convert</h3><p>Clear layouts focused on trust and action.</p></div></div>
        <div className="benefit"><Check /><div><h3>Ready to launch</h3><p>Complete pages and practical sections included.</p></div></div>
        <div className="benefit"><Rocket /><div><h3>Simple ownership</h3><p>One purchase. Yours to customise and launch.</p></div></div>
      </section>

      <section className="section how">
        <p className="eyebrow">HOW IT WORKS</p>
        <h2>From finding to launch.</h2>
        <div className="steps">
          <div><span>01</span><ShoppingBag /><h3>Choose a template</h3><p>Browse designs made for your industry.</p></div>
          <div><span>02</span><WandSparkles /><h3>Make it yours</h3><p>Adapt the content, colors, and images.</p></div>
          <div><span>03</span><Rocket /><h3>Launch with confidence</h3><p>Publish a polished website for your business.</p></div>
        </div>
      </section>
    </>
  )
}
