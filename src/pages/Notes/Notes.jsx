import { useState, useEffect } from 'react'
import styles from './Notes.module.css'

const STORAGE_KEY = 'react-lab-notes'

function loadNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}

function Notes() {
  const [notes, setNotes] = useState(loadNotes)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    saveNotes(notes)
  }, [notes])

  function handleAdd(e) {
    e.preventDefault()
    if (!title.trim()) return
    setNotes([...notes, { id: Date.now(), title: title.trim(), text: text.trim() }])
    setTitle('')
    setText('')
  }

  function handleRemove(id) {
    setNotes(notes.filter((n) => n.id !== id))
  }

  return (
    <div className={styles.page}>
      <h2>Заметки</h2>
      <form onSubmit={handleAdd} className={styles.form}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Заголовок"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Текст заметки"
          rows={3}
        />
        <button type="submit">Добавить</button>
      </form>
      <div className={styles.list}>
        {notes.map((note) => (
          <div key={note.id} className={styles.note}>
            <h4>{note.title}</h4>
            <p>{note.text || '—'}</p>
            <button onClick={() => handleRemove(note.id)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notes
