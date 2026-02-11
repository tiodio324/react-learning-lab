import { useState, useEffect } from 'react'
import styles from './Timer.module.css'

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [running])

  function handleReset() {
    setSeconds(0)
    setRunning(false)
  }

  return (
    <div className={styles.page}>
      <h2>Таймер</h2>
      <p className={styles.display}>{seconds} сек</p>
      <div className={styles.buttons}>
        <button onClick={() => setRunning(!running)}>
          {running ? 'Стоп' : 'Старт'}
        </button>
        <button onClick={handleReset}>Сброс</button>
      </div>
    </div>
  )
}

export default Timer
