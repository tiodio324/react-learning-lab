import { useState } from 'react'
import styles from './FormsText.module.css'

function FormsText() {
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Имя: ${name}\nО себе: ${bio}`)
  }

  return (
    <div className={styles.page}>
      <h2>Формы: текст</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Имя
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя"
          />
        </label>
        <label>
          О себе
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Пара слов о себе"
            rows={4}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
      <div className={styles.preview}>
        <p><strong>Имя:</strong> {name || '—'}</p>
        <p><strong>О себе:</strong> {bio || '—'}</p>
      </div>
    </div>
  )
}

export default FormsText
