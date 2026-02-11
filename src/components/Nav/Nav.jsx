import { NavLink } from 'react-router'
import styles from './Nav.module.css'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/counter', label: 'Счётчик' },
  { to: '/counter-history', label: 'Счётчик + история' },
  { to: '/todo', label: 'Список задач' },
  { to: '/todo-filter', label: 'Фильтр задач' },
  { to: '/themes', label: 'Темы' },
  { to: '/notes', label: 'Заметки' },
  { to: '/forms-text', label: 'Формы: текст' },
  { to: '/forms-advanced', label: 'Формы: select, checkbox' },
  { to: '/timer', label: 'Таймер' },
  { to: '/countdown', label: 'Обратный отсчёт' },
  { to: '/ref-demo', label: 'useRef' },
  { to: '/lifting-state', label: 'Подъём состояния' },
  { to: '/composition', label: 'Композиция' },
  { to: '/calendar', label: 'Календарь' },
  { to: '/sort-list', label: 'Сортировка' },
  { to: '/fake-loading', label: 'Имитация загрузки' },
  { to: '/slider', label: 'Слайдер' },
  { to: '/context-theme', label: 'Context: тема', starred: true },
  { to: '/context-cart', label: 'Context: корзина', starred: true },
  { to: '/api-requests', label: 'API запросы', starred: true },
  { to: '/animations', label: 'Анимации', starred: true },
  { to: '/forms-library', label: 'Формы (библиотека)', starred: true },
]

function Nav() {
  return (
    <nav className={styles.nav}>
      {links.map(({ to, label, starred }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          {label}{starred ? ' *' : ''}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav
