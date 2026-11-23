import { useState } from 'react'
import { CheckCircle2, Mail } from 'lucide-react'
import Seo from '../components/Seo'

export default function Contact() {
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const next = {}
    if (!data.get('name').trim()) next.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get('email'))) next.email = 'Please enter a valid email'
    if (data.get('message').trim().length < 10) next.message = 'Please write at least 10 characters'
    setErrors(next)
    if (!Object.keys(next).length) {
      setSent(true)
      event.currentTarget.reset()
    }
  }

  return (
    <section className="section contact-page">
      <Seo title="Contact LOCAL SITE — Website template support" description="Contact LOCAL SITE about template questions, licensing or marketplace support." />
      <div className="contact-heading"><p className="eyebrow">GET IN TOUCH</p><h1>Let's make something<br /><em>look better.</em></h1></div>
      <div className="contact-layout">
        <div className="contact-details"><Mail size={24} /><p>Template, licensing or marketplace questions.</p><p className="contact-demo-note">Demo form: submissions are validated locally and are not sent to a server.</p><a href="mailto:hello@localsite.cz">hello@localsite.cz</a></div>
        {sent ? <div className="form-success"><CheckCircle2 size={44} /><h2>Message sent</h2><p>Thank you. We will get back to you shortly.</p><button className="text-link" onClick={() => setSent(false)}>Send another message</button></div> :
        <form className="contact-form" onSubmit={submit} noValidate>
          <label>Name<input name="name" placeholder="Your name" />{errors.name && <span className="field-error">{errors.name}</span>}</label>
          <label>Email<input name="email" type="email" placeholder="you@example.com" />{errors.email && <span className="field-error">{errors.email}</span>}</label>
          <label>Message<textarea name="message" rows="5" placeholder="Tell us what you need" />{errors.message && <span className="field-error">{errors.message}</span>}</label>
          <button className="primary-button" type="submit">Send message</button>
        </form>}
      </div>
    </section>
  )
}
