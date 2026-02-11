import { useState } from 'react'
import styles from './Themes.module.css'

function Themes() {
  const [theme, setTheme] = useState(
    () => document.body.getAttribute('data-theme') || 'light'
  )

  function handleToggle() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    if (next === 'light') {
      document.body.removeAttribute('data-theme')
    } else {
      document.body.setAttribute('data-theme', next)
    }
  }

  return (
    <div className={styles.page}>
      <h2>Темы оформления</h2>
      <p>Текущая тема: {theme}</p>
      <button onClick={handleToggle} className={styles.button}>
        Переключить тему
      </button>
    </div>
  )
}

export default Themes
