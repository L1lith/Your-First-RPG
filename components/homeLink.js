import Link from 'next/link'
import './homeLink.scss'

export default () => (
  <h1 className="site-title">
    <Link href="/">
      <a className="home-link">
        <span className="site-icon">🎮</span> Your First RPG
      </a>
    </Link>
  </h1>
)
