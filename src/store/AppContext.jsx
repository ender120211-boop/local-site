import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('ls_favorites') || '[]'))
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('ls_cart') || '[]'))
  const [toast, setToast] = useState('')

  useEffect(() => localStorage.setItem('ls_favorites', JSON.stringify(favorites)), [favorites])
  useEffect(() => localStorage.setItem('ls_cart', JSON.stringify(cart)), [cart])

  const notify = (message) => {
    setToast(message)
    window.clearTimeout(notify.timer)
    notify.timer = window.setTimeout(() => setToast(''), 2600)
  }

  const toggleFavorite = (product) => {
    const exists = favorites.includes(product.id)
    setFavorites((items) => exists ? items.filter((id) => id !== product.id) : [...items, product.id])
    notify(exists ? 'Removed from favorites' : 'Saved to favorites')
  }

  const addToCart = (product) => {
    if (cart.includes(product.id)) {
      notify('Already in your cart')
      return
    }
    setCart((items) => [...items, product.id])
    notify(`${product.name} added to cart`)
  }

  const removeFromCart = (id) => setCart((items) => items.filter((item) => item !== id))

  return (
    <AppContext.Provider value={{ favorites, cart, toast, toggleFavorite, addToCart, removeFromCart, notify }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
