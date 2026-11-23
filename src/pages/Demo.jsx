import { ArrowLeft, ArrowRight, Calendar, Clock, Instagram, MapPin, Phone } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'

function DemoHeader({ name, links, dark = false }) {
  return <header className={dark ? 'demo-nav dark' : 'demo-nav'}><Link className="demo-logo" to={`/template/${name.id}`}>{name.name}</Link><nav>{links.map((link) => <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link}>{link}</a>)}</nav><a className="demo-book" href="#booking">Book now</a></header>
}

export default function Demo() {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)
  if (!product) return <div className="section empty-state"><h1>Preview not found</h1><Link to="/catalog">Back to catalog</Link></div>

  const barbers = product.category === 'BARBER'
  const beauty = product.category === 'BEAUTY'
  const auto = product.category === 'AUTO'
  const restaurant = product.category === 'RESTAURANT'

  if (barbers) return (
    <div className={`demo-page barber-demo ${product.theme}`}>
      <Link className="demo-back" to={`/template/${product.id}`}><ArrowLeft size={16} /> Back to template</Link>
      <DemoHeader name={product} links={['Services', 'Gallery', 'Booking']} dark />
      <section className="demo-hero"><p>EST. 2014 · PRAGUE</p><h1>Craft.<br /><em>Without compromise.</em></h1><a href="#booking">Book an appointment <ArrowRight /></a></section>
      <section className="demo-services" id="services"><p className="demo-kicker">THE MENU</p><h2>Precision in every detail.</h2><div>{[['Signature cut','45 min','499 Kč'],['Classic shave','30 min','399 Kč'],['Cut & beard','60 min','699 Kč']].map(([name,time,price]) => <div className="demo-service" key={name}><h3>{name}</h3><span>{time}</span><strong>{price}</strong></div>)}</div></section>
      <section className="demo-gallery" id="gallery"><img src={product.image} alt="Barbershop interior" /><img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85" alt="Barber at work" /><img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85" alt="Haircut detail" /></section>
      <section className="demo-contact" id="booking"><div><p className="demo-kicker">VISIT US</p><h2>Ready when you are.</h2></div><a href="tel:+420222555111"><Phone /> +420 222 555 111</a><a href="#location"><MapPin /> Dlouhá 18, Praha</a><button>Reserve a chair <Calendar /></button></section>
    </div>
  )

  if (beauty) return (
    <div className={`demo-page beauty-demo ${product.theme}`}>
      <Link className="demo-back" to={`/template/${product.id}`}><ArrowLeft size={16} /> Back to template</Link>
      <DemoHeader name={product} links={['Services', 'Gallery', 'Booking']} />
      <section className="demo-hero"><div><p className="demo-kicker">SKIN & SELFCARE</p><h1>Beauty, in your<br /><em>own light.</em></h1><p>Thoughtful treatments, modern rituals, and care that feels entirely personal.</p><a href="#booking">Discover treatments <ArrowRight /></a></div><img src={product.image} alt="Beauty studio" /></section>
      <section className="demo-services" id="services"><p className="demo-kicker">TREATMENTS</p><h2>Care for every kind of skin.</h2><div>{[['Signature facial','75 min','1 499 Kč'],['Glow treatment','50 min','990 Kč'],['Scalp ritual','60 min','1 199 Kč']].map(([name,time,price]) => <div className="demo-service" key={name}><h3>{name}</h3><span>{time}</span><strong>{price}</strong></div>)}</div></section>
      <section className="demo-gallery" id="gallery"><img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85" alt="Beauty treatment" /><img src={product.image} alt="Studio detail" /></section>
      <section className="demo-contact" id="booking"><div><p className="demo-kicker">THE STUDIO</p><h2>Your moment is waiting.</h2></div><button>Book a treatment <Calendar /></button></section>
    </div>
  )

  if (auto) return (
    <div className={`demo-page auto-demo ${product.theme}`}>
      <Link className="demo-back" to={`/template/${product.id}`}><ArrowLeft size={16} /> Back to template</Link>
      <DemoHeader name={product} links={['Services', 'Projects', 'Booking']} dark />
      <section className="demo-hero"><p>PRECISE AUTOMOTIVE CARE</p><h1>Make every line<br /><em>stand out.</em></h1><a href="#booking">Explore services <ArrowRight /></a></section>
      <section className="demo-services" id="services"><p className="demo-kicker">SERVICES</p><h2>Protection and perfection.</h2><div>{[['Exterior detail','From','1 990 Kč'],['Ceramic coating','From','8 900 Kč'],['Paint correction','From','4 900 Kč']].map(([name,from,price]) => <div className="demo-service" key={name}><h3>{name}</h3><span>{from}</span><strong>{price}</strong></div>)}</div></section>
      <section className="demo-gallery" id="gallery"><img src={product.image} alt="Performance car" /><img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85" alt="Luxury car" /></section>
      <section className="demo-contact" id="booking"><div><p className="demo-kicker">GET A QUOTE</p><h2>Give your car an advantage.</h2></div><button>Request a quote <ArrowRight /></button></section>
    </div>
  )

  if (restaurant) return (
    <div className={`demo-page restaurant-demo ${product.theme}`}>
      <Link className="demo-back" to={`/template/${product.id}`}><ArrowLeft size={16} /> Back to template</Link>
      <DemoHeader name={product} links={['Menu', 'Gallery', 'Booking']} dark />
      <section className="demo-hero"><p>SEASONAL CUISINE · PRAGUE</p><h1>Good ingredients.<br /><em>Quiet luxury.</em></h1><a href="#booking">Reserve a table <ArrowRight /></a></section>
      <section className="demo-services" id="menu"><p className="demo-kicker">FROM THE MENU</p><h2>Tonight's selection.</h2><div>{[['Market fish','Leek, beurre blanc, herbs','490 Kč'],['Dry-aged beef','Potato, shallot, jus','790 Kč'],['Summer vegetables','Fermented cream, seeds','390 Kč']].map(([name,details,price]) => <div className="demo-service" key={name}><h3>{name}</h3><span>{details}</span><strong>{price}</strong></div>)}</div></section>
      <section className="demo-gallery" id="gallery"><img src={product.image} alt="Restaurant dining room" /><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85" alt="Restaurant dish" /></section>
      <section className="demo-contact" id="booking"><div><p className="demo-kicker">RESERVATIONS</p><h2>A table is waiting.</h2></div><a href="tel:+420222333444"><Phone /> +420 222 333 444</a><span><Clock /> Tue–Sun, 17:00–23:00</span><button>Reserve <Calendar /></button></section>
    </div>
  )

  return null
}
