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
import LanguageSelector from './LanguageSelector'

//import { Link } from 'gatsby'

//import Settings from './Settings'

const Header = props => (
  <header
    className={mainHeader + (typeof props.className == 'string' ? ' ' + props.className : '')}>
    <Link aria-hidden to="/">
      <img
        alt="site logo"
        type="image/svg"
        className={siteIcon}
        src="/images/icons/site-icon.svg"
      />
    </Link>
    <h1 className={siteTitle}>
      <Link to="/" className={homeLink}>
        Your First RPG
      </Link>
    </h1>
    <Link to="/resources" className={resources}>
      {useTranslation('Stuck?', { es: 'Atascada?' })}
    </Link>
    <LanguageSelector setPopup={props.setPopup} />
  </header>
)

// <Settings className={settings} />
export default Header
