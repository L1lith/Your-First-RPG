import Link from 'next/link'
import './homeLink.scss'

export default () => (
  <h1 className="site-title">
    <Link href="/">
      <a className="home-link">
        Your First RPG <span className="site-icon">🎮</span>
      </a>
    </Link>
  </h1>
)
