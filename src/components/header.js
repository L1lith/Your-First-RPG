import Link from '../components/TranslatedLink'
import useTranslation from '../functions/useTranslation'
import {
  siteIcon,
  mainHeader,
  homeLink,
  resources,
  settings,
  siteTitle,
  navigation,
  githubIcon
} from '../styles/header.module.scss'
import LanguageSelector from './LanguageSelector'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import { Link } from 'gatsby'

//import Settings from './Settings'

const Header = props => (
  <header
    className={mainHeader + (typeof props.className == 'string' ? ' ' + props.className : '')}>
    <Link className={siteIcon} aria-hidden to="/">
      <img alt="site logo" type="image/svg" src="/images/icons/site-icon.svg" />
    </Link>
    <h1 className={siteTitle}>
      <Link to="/" className={homeLink}>
        Your First RPG
      </Link>
    </h1>

    <LanguageSelector setPopup={props.setPopup} />
    <nav className={navigation}>
      <FontAwesomeIcon icon={faChevronLeft} />
      <ul>
        <li>
          <Link to="/resources" className={resources}>
            {useTranslation('Need help?', { es: '¿Necesitas ayuda?' })}
          </Link>
        </li>
        <li>
          <Link to="/rpg/editor">{useTranslation('The Editor', { es: 'La Editora' })}</Link>
        </li>
        <li>
          <Link to="/support">Support Me</Link>
        </li>
        <li>
          <a href="https://github.com/L1lith/Your-First-RPG">
            <FontAwesomeIcon className={githubIcon} icon={faGithub} />
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

// <Settings className={settings} />
export default Header
