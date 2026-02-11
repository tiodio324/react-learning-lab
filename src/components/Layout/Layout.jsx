import { Outlet } from 'react-router'
import Nav from '../Nav/Nav'
import styles from './Layout.module.css'

function Layout() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>React Learning Lab</h1>
        <Nav />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
