import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { categories, products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'

export default function Catalog() {
  const [category, setCategory] = useState('ALL')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')
  const filtered = useMemo(() => {
    let result = products.filter((item) =>
      (category === 'ALL' || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    if (sort === 'low') result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'high') result = [...result].sort((a, b) => b.price - a.price)
    return result
  }, [category, search, sort])

  return (
    <section className="section catalog-page">
      <Seo title="Website templates catalog — LOCAL SITE" description="Explore responsive barber, beauty, automotive and restaurant website templates." />
      <p className="eyebrow">TEMPLATE MARKETPLACE</p>
      <h1>Find your next website.</h1>
      <div className="catalog-controls">
        <div className="category-tabs">
          {categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <div className="search-sort">
          <label className="search-box"><Search size={17} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search templates" /></label>
          <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort templates">
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </div>
      </div>
      <p className="results-count">{filtered.length} templates</p>
      {filtered.length ? <div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> :
        <div className="empty-state"><h2>No templates found</h2><p>Try a different search or category.</p></div>}
    </section>
  )
}
