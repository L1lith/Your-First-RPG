import Link from '../components/TranslatedLink'
import hideOnClickOutside from '../functions/hideOnOutsideClick'
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
import { useEffect, useRef, useState } from 'react'

const Header = props => {
  const nav = useRef(null)
  const [isNavOpen, setNavOpen] = useState(false)
  useEffect(() => {
    if (nav?.current) {
      const elem = nav.current
      console.log(elem, 'elem')
      const clickListener = event => {
        // if (
        //   !elem.contains(event.target) /* They clicked outside the nav */ ||
        //   event.target?.tagName === 'A' /*They clicked the link */
        // ) {
        // }
        setNavOpen(false)
      }
      const hoverListener = () => {
        setNavOpen(true)
      }
      const mouseOutListener = () => {
        setNavOpen(false)
      }
      elem.addEventListener('mouseout', mouseOutListener)
      elem.addEventListener('mouseover', hoverListener)
      document.addEventListener('click', clickListener)
      const removeEventListener = () => {
        elem.removeEventListener('mouseover', hoverListener)
        document.removeEventListener('click', clickListener)
        elem.removeEventListener('mouseout', mouseOutListener)
      }
      return removeEventListener
    }
  }, [nav])

  return (
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
      <nav ref={nav} className={navigation}>
        <FontAwesomeIcon icon={faChevronLeft} />
        <ul style={isNavOpen ? { display: 'initial' } : { display: 'none' }}>
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
}

// <Settings className={settings} />
export default Header
