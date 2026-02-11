import { useState, useEffect } from 'react'
import styles from './Countdown.module.css'

function Countdown() {
  const [seconds, setSeconds] = useState(10)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running || seconds <= 0) return
    const id = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setRunning(false)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [running, seconds])

  function handleStart() {
    if (seconds <= 0) return
    setRunning(true)
  }

  function handleReset() {
    setSeconds(10)
    setRunning(false)
  }

  return (
    <div className={styles.page}>
      <h2>Обратный отсчёт</h2>
      <p className={styles.display}>{seconds}</p>
      <div className={styles.buttons}>
        <button onClick={handleStart} disabled={running}>
          Старт
        </button>
        <button onClick={handleReset}>Сброс</button>
      </div>
      <input
        type="number"
        min={1}
        max={60}
        value={seconds}
        onChange={(e) => setSeconds(Number(e.target.value) || 0)}
        disabled={running}
      />
    </div>
  )
}

export default Countdown
