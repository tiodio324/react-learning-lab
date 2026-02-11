import { useState } from 'react'
import styles from './Counter.module.css'

function Counter() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(count + 1)
  }

  function handleDecrement() {
    setCount(count - 1)
  }

  return (
    <div className={styles.page}>
      <h2>Счётчик</h2>
      <p className={styles.value}>{count}</p>
      <div className={styles.buttons}>
        <button onClick={handleDecrement}>−</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  )
}

export default Counter
