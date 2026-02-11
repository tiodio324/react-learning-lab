import { useState, useEffect } from 'react'
import styles from './FakeLoading.module.css'

function FakeLoading() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  function handleLoad() {
    setLoading(true)
    setData(null)
  }

  useEffect(() => {
    if (!loading) return
    const timer = setTimeout(() => {
      setData('Данные загружены')
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [loading])

  return (
    <div className={styles.page}>
      <h2>Имитация загрузки</h2>
      <button onClick={handleLoad} disabled={loading}>
        {loading ? 'Загрузка...' : 'Загрузить'}
      </button>
      {loading && <p className={styles.loading}>Ждём 2 секунды...</p>}
      {data && <p className={styles.result}>{data}</p>}
    </div>
  )
}

export default FakeLoading
