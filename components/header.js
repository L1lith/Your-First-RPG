import React, { Component } from 'react'
import styles from '../styles/header.module.scss'
import Link from 'next-multilingual/link'
import Settings from './Settings'

const Header = () => (
  <header className={styles['main-header']}>
    <img
      alt="site logo"
      type="image/svg"
      className={styles['site-icon']}
      src="/images/icons/site-icon.svg"
    />
    <h1 className="site-title">
      <Link href="/">
        <a className={styles['home-link']}>Your First RPG</a>
      </Link>
    </h1>
    <Link href="/resources">
      <a className={styles.resources}>Stuck?</a>
    </Link>
    {
      null /*<Link href="/support">
      <a className={styles.support}>Support Me</a>
</Link>*/
    }
    <Settings className={styles.settings} />
  </header>
)

export default Header
