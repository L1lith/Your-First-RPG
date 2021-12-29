import React, { Component } from 'react'
import { siteIcon, mainHeader, homeLink, resources, settings } from '../styles/header.module.scss'
import { Link } from 'gatsby'
import Settings from './Settings'

const Header = () => (
  <header className={mainHeader}>
    <img alt="site logo" type="image/svg" className={siteIcon} src="/images/icons/site-icon.svg" />
    <h1 className="site-title">
      <Link href="/">
        <a className={homeLink}>Your First RPG</a>
      </Link>
    </h1>
    <Link href="/resources">
      <a className={resources}>Stuck?</a>
    </Link>
    {
      null /*<Link href="/support">
      <a className={styles.support}>Support Me</a>
</Link>*/
    }
    <Settings className={settings} />
  </header>
)

export default Header
