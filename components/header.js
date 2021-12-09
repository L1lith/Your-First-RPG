import React, { Component } from 'react'
import styles from '../styles/header.module.scss'
import Link from 'next/link'
import Settings from './Settings'

const Header = () => (
  <header className={styles['main-header']}>
    <Link href="/resources">
      <a className={styles.resources}>Stuck?</a>
    </Link>

    <h1 className="site-title">
      <Link href="/">
        <a className={styles['home-link']}>Your First RPG</a>
      </Link>
    </h1>
    <img
      alt="site logo"
      type="image/svg"
      className={styles['site-icon']}
      src="/images/site-icon.svg"
    />
    {
      null /*<Link href="/support">
      <a className={styles.support}>Support Me</a>
</Link>*/
    }
    <Settings className={styles.settings} />
  </header>
)

export default Header
