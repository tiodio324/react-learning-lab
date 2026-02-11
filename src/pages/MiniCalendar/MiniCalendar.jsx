import { useState } from 'react'
import styles from './MiniCalendar.module.css'

function MiniCalendar() {
  const [date, setDate] = useState(new Date())
  const year = date.getFullYear()
  const month = date.getMonth()

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const prevMonthDays = new Date(year, month, 0).getDate()
  const startOffset = firstDay === 0 ? 6 : firstDay - 1

  const blanks = Array(startOffset)
    .fill(null)
    .map((_, i) => prevMonthDays - startOffset + i + 1)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  function handlePrev() {
    setDate(new Date(year, month - 1))
  }

  function handleNext() {
    setDate(new Date(year, month + 1))
  }

  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]

  return (
    <div className={styles.page}>
      <h2>Мини-календарь</h2>
      <div className={styles.header}>
        <button onClick={handlePrev}>←</button>
        <span>{monthNames[month]} {year}</span>
        <button onClick={handleNext}>→</button>
      </div>
      <div className={styles.weekdays}>
        <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span>
        <span>Пт</span><span>Сб</span><span>Вс</span>
      </div>
      <div className={styles.grid}>
        {blanks.map((d, i) => (
          <span key={`b-${i}`} className={styles.other}>{d}</span>
        ))}
        {days.map((d) => (
          <span key={d} className={styles.day}>{d}</span>
        ))}
      </div>
    </div>
  )
}

export default MiniCalendar
