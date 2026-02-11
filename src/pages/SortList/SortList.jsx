import { useState } from 'react'
import styles from './SortList.module.css'

const initialItems = [
  'Арбуз',
  'Банан',
  'Виноград',
  'Груша',
  'Дыня',
]

function SortList() {
  const [items] = useState(initialItems)
  const [order, setOrder] = useState('asc')

  const sorted = [...items].sort((a, b) => {
    if (order === 'asc') return a.localeCompare(b)
    return b.localeCompare(a)
  })

  return (
    <div className={styles.page}>
      <h2>Сортировка списка</h2>
      <div className={styles.buttons}>
        <button onClick={() => setOrder('asc')}>А → Я</button>
        <button onClick={() => setOrder('desc')}>Я → А</button>
      </div>
      <ul className={styles.list}>
        {sorted.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SortList
