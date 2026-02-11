import styles from './Composition.module.css'

function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

function Composition() {
  return (
    <div className={styles.page}>
      <h2>Композиция</h2>
      <p>children — всё что внутри тега компонента</p>
      <div className={styles.grid}>
        <Card title="Блок 1">
          <p>Текст внутри первого блока</p>
        </Card>
        <Card title="Блок 2">
          <ul>
            <li>Пункт 1</li>
            <li>Пункт 2</li>
          </ul>
        </Card>
        <Card title="Блок 3">
          <button>Кнопка</button>
        </Card>
      </div>
    </div>
  )
}

export default Composition
