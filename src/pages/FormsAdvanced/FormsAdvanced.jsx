import { useState } from 'react'
import styles from './FormsAdvanced.module.css'

function FormsAdvanced() {
  const [city, setCity] = useState('')
  const [agree, setAgree] = useState(false)
  const [size, setSize] = useState('m')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Город: ${city}\nСогласен: ${agree}\nРазмер: ${size}`)
  }

  return (
    <div className={styles.page}>
      <h2>Формы: select, checkbox, radio</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Город
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Выберите</option>
            <option value="msk">Москва</option>
            <option value="spb">Санкт-Петербург</option>
            <option value="ekb">Екатеринбург</option>
          </select>
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          Согласен с условиями
        </label>
        <fieldset>
          <legend>Размер</legend>
          <label className={styles.radio}>
            <input
              type="radio"
              name="size"
              value="s"
              checked={size === 's'}
              onChange={(e) => setSize(e.target.value)}
            />
            S
          </label>
          <label className={styles.radio}>
            <input
              type="radio"
              name="size"
              value="m"
              checked={size === 'm'}
              onChange={(e) => setSize(e.target.value)}
            />
            M
          </label>
          <label className={styles.radio}>
            <input
              type="radio"
              name="size"
              value="l"
              checked={size === 'l'}
              onChange={(e) => setSize(e.target.value)}
            />
            L
          </label>
        </fieldset>
        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

export default FormsAdvanced
