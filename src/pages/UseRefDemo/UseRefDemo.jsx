import { useRef, useState } from 'react'
import styles from './UseRefDemo.module.css'

function UseRefDemo() {
  const inputRef = useRef(null)
  const [value, setValue] = useState('')

  function handleFocus() {
    inputRef.current?.focus()
  }

  return (
    <div className={styles.page}>
      <h2>useRef</h2>
      <p>Кнопка фокусирует поле ввода через ref</p>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите текст"
        className={styles.input}
      />
      <button onClick={handleFocus}>Фокус на поле</button>
    </div>
  )
}

export default UseRefDemo
