import React, { Component } from 'react'
import './header.scss'
import HomeLink from './homeLink'
import Link from 'next/link'

class Header extends Component {
  render() {
    const { router } = this.props
    return (
      <header id="main-header">
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
