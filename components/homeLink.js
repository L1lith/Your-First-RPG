import Link from 'next/link'
import styles from '../styles/homeLink.module.scss'

export default () => (
  <h1 className="site-title">
    <Link href="/">
      <a className={styles['home-link']}>
        <img alt="site logo" className={styles['site-icon']} src="/images/site-icon.png" /> Your
        First RPG
      </a>
    </Link>
  </h1>
)
