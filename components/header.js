import React, { Component } from 'react'
import styles from '../styles/header.module.scss'
import Link from 'next/link'

const Header = () => (
  <header className={styles['main-header']}>
    <Link href="/resources">
      <a>Resources</a>
    </Link>

    <h1 className="site-title">
      <Link href="/">
        <a className={styles['home-link']}>
          Your First RPG
          <img alt="site logo" className={styles['site-icon']} src="/images/site-icon.svg" />
        </a>
      </Link>
    </h1>
    <Link href="/support">
      <a className={styles.support}>Support Me</a>
    </Link>
  </header>
)

export default Header
