import React, { Component } from 'react'
import './header.scss'
import HomeLink from './homeLink'
import Link from 'next/link'

class Header extends Component {
  render() {
    const { router } = this.props
    return (
      <header id="main-header">
        <HomeLink />
        <Link href="/resources">
          <a>Resources</a>
        </Link>
      </header>
    )
  }
}

export default Header
