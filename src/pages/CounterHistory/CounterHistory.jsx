import { useState } from 'react'
import styles from './CounterHistory.module.css'

function CounterHistory() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([])

  function handleStep(delta) {
    const next = count + delta
    setCount(next)
    setHistory([...history, `${count} → ${next}`])
  }

  function handleReset() {
    setCount(0)
    setHistory([])
  }

  return (
    <div className={styles.page}>
      <h2>Счётчик с историей</h2>
      <p className={styles.value}>{count}</p>
      <div className={styles.buttons}>
        <button onClick={() => handleStep(-1)}>−</button>
        <button onClick={() => handleStep(1)}>+</button>
      </div>
      <button onClick={handleReset} className={styles.reset}>Сбросить</button>
      <h3>История</h3>
      <ul className={styles.history}>
        {history.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default CounterHistory
