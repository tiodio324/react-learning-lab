import { useState } from 'react'
import styles from './TodoList.module.css'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input.trim() }])
    setInput('')
  }

  function handleRemove(id) {
    setTodos(todos.filter((t) => t.id !== id))
  }

  return (
    <div className={styles.page}>
      <h2>Список задач</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Новая задача"
        />
        <button type="submit">Добавить</button>
      </form>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <span>{todo.text}</span>
            <button onClick={() => handleRemove(todo.id)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
