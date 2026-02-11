import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addItem(product) {
    const existing = items.find((i) => i.id === product.id)
    if (existing) {
      setItems(
        items.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      )
    } else {
      setItems([...items, { ...product, qty: 1 }])
    }
  }

  function removeItem(id) {
    setItems(items.filter((i) => i.id !== id))
  }

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
