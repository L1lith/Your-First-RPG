import Link from '../components/TranslatedLink'
import isDev from '../functions/isDev'
import { domBlocker, settingsMenu, settingsButton, close } from '../styles/Settings.module.scss'
import SwitchComponent from './SwitchComponent'
import { useState, Fragment } from 'react'

const Settings = props => {
  const [isOpen, setOpen] = useState(false)
  const className =
    (typeof props.className == 'string' ? props.className + ' ' : '') +
    ' emojiButton ' +
    settingsButton
  let settingsMenuElement = null
  if (isOpen) {
    settingsMenuElement = (
      <Fragment>
        <span className={domBlocker} />
        <div className={settingsMenu}>
          <button
            onClick={() => {
              setOpen(false)
              document.body.classList.remove('disabled')
            }}
            className={close + ' emojiButton grayscale'}
          >
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
          <Link to="/resources">
            <a
              onClick={() => {
                setOpen(false)
              }}
            >
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
        className={className}
      >
        ⚙️
      </button>
      {settingsMenuElement}
    </Fragment>
  )
}

export default Settings
