import { useEffect } from 'react'

export default function Seo({ title, description, type = 'website' }) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector, attribute, key, content) => {
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:type"]', 'property', 'og:type', type)
  }, [title, description, type])

  return null
}
