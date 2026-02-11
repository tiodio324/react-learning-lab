import { Link } from 'react-router'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.page}>
      <h2>Добро пожаловать в React Learning Lab</h2>
      <p>
        Сайт разбит на страницы. Каждая страница демонстрирует отдельную тему React.
        Используй навигацию выше, чтобы переходить между разделами.
      </p>
      <h3>Темы</h3>
      <ul className={styles.list}>
        <li><Link to="/counter">Счётчик</Link> — useState, обработчики</li>
        <li><Link to="/counter-history">Счётчик + история</Link> — массивы в state</li>
        <li><Link to="/todo">Список задач</Link> — формы, списки, key</li>
        <li><Link to="/todo-filter">Фильтр задач</Link> — filter, поиск</li>
        <li><Link to="/themes">Темы</Link> — условный рендер</li>
        <li><Link to="/notes">Заметки</Link> — LocalStorage</li>
        <li><Link to="/forms-text">Формы: текст</Link> — controlled inputs</li>
        <li><Link to="/forms-advanced">Формы: select, checkbox</Link> — разные типы полей</li>
        <li><Link to="/timer">Таймер</Link> — useEffect, интервалы</li>
        <li><Link to="/countdown">Обратный отсчёт</Link> — useEffect, cleanup</li>
        <li><Link to="/ref-demo">useRef</Link> — доступ к DOM</li>
        <li><Link to="/lifting-state">Подъём состояния</Link> — родитель и дети</li>
        <li><Link to="/composition">Композиция</Link> — children</li>
        <li><Link to="/calendar">Календарь</Link> — работа с датами</li>
        <li><Link to="/sort-list">Сортировка</Link> — sort, filter</li>
        <li><Link to="/fake-loading">Имитация загрузки</Link> — useEffect, async</li>
        <li><Link to="/slider">Слайдер</Link> — управление индексом</li>
      </ul>
      <h3>Темы со звёздочкой *</h3>
      <p>Будут использовать React Context или внешние npm-библиотеки</p>
      <ul className={styles.list}>
        <li><Link to="/context-theme">Context: тема</Link> *</li>
        <li><Link to="/context-cart">Context: корзина</Link> *</li>
        <li><Link to="/api-requests">API запросы</Link> *</li>
        <li><Link to="/animations">Анимации</Link> *</li>
        <li><Link to="/forms-library">Формы (библиотека)</Link> *</li>
      </ul>
    </div>
  )
}

export default Home
