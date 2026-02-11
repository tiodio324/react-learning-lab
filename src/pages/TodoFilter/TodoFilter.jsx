import { useState } from 'react'
import styles from './TodoFilter.module.css'

const initialItems = [
  { id: 1, text: 'Купить молоко' },
  { id: 2, text: 'Сделать уроки' },
  { id: 3, text: 'Позвонить маме' },
  { id: 4, text: 'Почитать книгу' },
  { id: 5, text: 'Молоко не купить' },
]

function TodoFilter() {
  const [items] = useState(initialItems)
  const [query, setQuery] = useState('')

  const filtered = items.filter((item) =>
    item.text.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className={styles.page}>
      <h2>Фильтр задач</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск..."
        className={styles.search}
      />
      <ul className={styles.list}>
        {filtered.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoFilter
