import { useState } from 'react'
import styles from './LiftingState.module.css'

function ChildA({ value, onChange }) {
  return (
    <div className={styles.block}>
      <span>Компонент A: </span>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

function ChildB({ value }) {
  return (
    <div className={styles.block}>
      <span>Компонент B показывает: {value || '—'}</span>
    </div>
  )
}

function LiftingState() {
  const [shared, setShared] = useState('')

  return (
    <div className={styles.page}>
      <h2>Подъём состояния</h2>
      <p>Один state в родителе — оба ребёнка его используют</p>
      <ChildA value={shared} onChange={setShared} />
      <ChildB value={shared} />
    </div>
  )
}

export default LiftingState
