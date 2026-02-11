import { useState } from 'react'
import styles from './Slider.module.css'

const slides = [
  { id: 1, text: 'Слайд 1' },
  { id: 2, text: 'Слайд 2' },
  { id: 3, text: 'Слайд 3' },
]

function Slider() {
  const [index, setIndex] = useState(0)

  const slide = slides[index]

  function handlePrev() {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1))
  }

  function handleNext() {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1))
  }

  return (
    <div className={styles.page}>
      <h2>Слайдер</h2>
      <div className={styles.slide}>
        <p>{slide.text}</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={handlePrev}>←</button>
        <span>{index + 1} / {slides.length}</span>
        <button onClick={handleNext}>→</button>
      </div>
    </div>
  )
}

export default Slider
