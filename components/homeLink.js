import Link from 'next/link'
import styles from '../styles/homeLink.module.scss'

export default () => (
  <h1 className="site-title">
    <Link href="/">
      <a className={styles['home-link']}>
        <span className="site-icon">🎮</span> Your First RPG
      </a>
    </Link>
  </h1>
)
