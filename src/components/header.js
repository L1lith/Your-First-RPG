import Link from '../components/TranslatedLink'
import useTranslation from '../functions/useTranslation'
import {
  siteIcon,
  mainHeader,
  homeLink,
  resources,
  settings,
  siteTitle
} from '../styles/header.module.scss'
import Settings from './Settings'
import React, { Component } from 'react'

const Header = () => (
  <header className={mainHeader}>
    <img alt="site logo" type="image/svg" className={siteIcon} src="/images/icons/site-icon.svg" />
    <h1 className={siteTitle}>
      <Link to="/">
        <a className={homeLink}>Your First RPG</a>
      </Link>
    </h1>
    <Link to="/resources">
      <a className={resources}>{useTranslation('Stuck?', { es: 'Atascada?' })}</a>
    </Link>
    {
      null /*<Link to="/support">
      <a className={styles.support}>Support Me</a>
</Link>*/
    }
    <Settings className={settings} />
  </header>
)

export default Header
