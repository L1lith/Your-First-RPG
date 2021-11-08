import React, { Component } from 'react'
import styles from '../styles/header.module.scss'
import HomeLink from './homeLink'
import Link from 'next/link'

class Header extends Component {
  render() {
    const { router } = this.props
    return (
      <header className={styles['main-header']}>
        <Link href="/resources">
          <a>Resources</a>
        </Link>
        <HomeLink />
        <Link href="/support">
          <a className="support">Support Me</a>
        </Link>
      </header>
    )
  }
}

export default Header
