import { ShieldCheck, Gem, HeartHandshake } from 'lucide-react'
import Seo from '../components/Seo'

export default function About() {
  return (
    <>
      <Seo title="About LOCAL SITE — Website template marketplace" description="Learn about LOCAL SITE and the principles behind our responsive website templates for local businesses." />
      <section className="section about-hero">
        <p className="eyebrow">OUR STORY</p>
        <h1>Good websites should help<br />good businesses <em>grow.</em></h1>
      </section>
      <section className="section about-story">
        <div><p className="eyebrow">LOCAL SITE</p><h2>Made for local ambition.</h2></div>
        <p>LOCAL SITE creates carefully considered website templates for independent businesses. We believe a strong digital presence should feel distinctive, practical, and within reach—not generic or out of date.</p>
      </section>
      <section className="section principles">
        <article><Gem /><h3>Quality over quantity</h3><p>Every template is built around a clear visual idea and a real business purpose.</p></article>
        <article><ShieldCheck /><h3>Built to be useful</h3><p>Useful sections, clear navigation, and mobile-first layouts come before decoration.</p></article>
        <article><HeartHandshake /><h3>Honest simplicity</h3><p>One clear product, transparent pricing, and no complicated service package required.</p></article>
      </section>
    </>
  )
}
