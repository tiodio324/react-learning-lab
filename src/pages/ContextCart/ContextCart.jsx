import { useCart } from '../../context/CartContext'
import styles from './ContextCart.module.css'

const products = [
  { id: 1, name: 'Хлеб', price: 50 },
  { id: 2, name: 'Молоко', price: 80 },
  { id: 3, name: 'Яблоки', price: 120 },
  { id: 4, name: 'Сыр', price: 350 },
]

function ContextCart() {
  const { items, addItem, removeItem, total } = useCart()

  return (
    <div className={styles.page}>
      <h2>Context: корзина *</h2>
      <p>Корзина хранится в React Context, доступна из любого компонента</p>
      <div className={styles.grid}>
        <div className={styles.section}>
          <h3>Товары</h3>
          <ul className={styles.list}>
            {products.map((p) => (
              <li key={p.id} className={styles.product}>
                <span>{p.name} — {p.price} ₽</span>
                <button onClick={() => addItem(p)}>В корзину</button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Корзина</h3>
          {items.length === 0 ? (
            <p>Пусто</p>
          ) : (
            <>
              <ul className={styles.list}>
                {items.map((i) => (
                  <li key={i.id} className={styles.cartItem}>
                    <span>{i.name} × {i.qty} = {i.price * i.qty} ₽</span>
                    <button onClick={() => removeItem(i.id)}>×</button>
                  </li>
                ))}
              </ul>
              <p className={styles.total}>Итого: {total} ₽</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContextCart
