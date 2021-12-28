import styles from '../styles/Settings.module.scss'
import { useState, Fragment } from 'react'
import isDev from '../functions/isDev'
import SwitchComponent from './SwitchComponent'
import { Link } from 'gatsby'

const Settings = props => {
  const [isOpen, setOpen] = useState(false)
  const className =
    (typeof props.className == 'string' ? props.className + ' ' : '') +
    ' emojiButton ' +
    styles['settings-button']
  let settingsMenu = null
  if (isOpen) {
    settingsMenu = (
      <Fragment>
        <span className={styles['dom-blocker']} />
        <div className={styles['settings-menu']}>
          <button
            onClick={() => {
              setOpen(false)
              document.body.classList.remove('disabled')
            }}
            className={styles['close'] + ' emojiButton grayscale'}>
            ❌
          </button>
          <span>
            <h2>JavaScript Editor</h2>
            <SwitchComponent
              onChange={value => {
                localStorage.codeLanguage = value ? 'js' : 'scratch'
              }}
              value={localStorage.codeLanguage !== 'scratch' /* Default language is JS */}
              rounded
              default="on"
              onLabel="Text Editor"
              offLabel="Blocks"
            />
          </span>
          <a target="_blank" href="https://support.google.com/chrome/answer/9658361">
            <button>Download the App!</button>
          </a>
          <Link href="/resources">
            <a
              onClick={() => {
                setOpen(false)
              }}
              className={styles.resources}>
              Stuck?
            </a>
          </Link>
        </div>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <button
        onClick={() => {
          if (!isDev()) return // The settings menu is currently dev only
          setOpen(true)
          document.body.classList.add('disabled')
        }}
        className={className}>
        ⚙️
      </button>
      {settingsMenu}
    </Fragment>
  )
}

export default Settings
