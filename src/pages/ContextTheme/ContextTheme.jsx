import { useTheme } from '../../context/ThemeContext'
import styles from './ContextTheme.module.css'

function ContextTheme() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles.page}>
      <h2>Context: тема *</h2>
      <p>Тема берётся из React Context и доступна везде без props</p>
      <p className={styles.current}>Текущая тема: {theme}</p>
      <button onClick={toggleTheme} className={styles.button}>
        Переключить тему
      </button>
    </div>
  )
}

export default ContextTheme
