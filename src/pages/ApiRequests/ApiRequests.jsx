import { useState, useEffect } from 'react'
import styles from './ApiRequests.module.css'

function ApiRequests() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  function fetchPosts() {
    setLoading(true)
    setError(null)
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка загрузки')
        return res.json()
      })
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка загрузки')
        return res.json()
      })
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className={styles.page}>
      <h2>API запросы *</h2>
      <p>Данные с JSONPlaceholder через fetch</p>
      <button onClick={fetchPosts} disabled={loading}>
        {loading ? 'Загрузка...' : 'Обновить'}
      </button>
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.id} className={styles.item}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ApiRequests
