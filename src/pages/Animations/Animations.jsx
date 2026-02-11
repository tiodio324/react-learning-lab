import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import styles from './Animations.module.css'

function Animations() {
  const [visible, setVisible] = useState(false)
  const [list, setList] = useState([])

  function addItem() {
    setList([...list, `Элемент ${list.length + 1}`])
  }

  function removeItem(index) {
    setList(list.filter((_, i) => i !== index))
  }

  return (
    <div className={styles.page}>
      <h2>Анимации *</h2>
      <p>Библиотека Framer Motion</p>
      <div className={styles.section}>
        <h3>Появление и исчезновение</h3>
        <button onClick={() => setVisible(!visible)}>
          {visible ? 'Скрыть' : 'Показать'}
        </button>
        <AnimatePresence>
          {visible && (
            <Motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={styles.box}
            >
              Привет, это анимированный блок
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.section}>
        <h3>Список с анимацией</h3>
        <button onClick={addItem}>Добавить</button>
        <ul className={styles.list}>
          <AnimatePresence>
            {list.map((item, i) => (
              <Motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                layout
                className={styles.listItem}
              >
                {item}
                <button onClick={() => removeItem(i)}>×</button>
              </Motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  )
}

export default Animations
