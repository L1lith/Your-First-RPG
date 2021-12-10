import styles from '../styles/Settings.module.scss'
import { useState, Fragment } from 'react'

const Settings = props => {
  const [isOpen, setOpen] = useState(false)
  const className =
    (typeof props.className == 'string' ? props.className + ' ' : '') +
    ' emoji-button ' +
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
            className={styles['close'] + ' emoji-button grayscale'}>
            ❌
          </button>
          <a target="_blank" href="https://support.google.com/chrome/answer/9658361">
            <button>Download the App!</button>
          </a>
        </div>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <button
        onClick={() => {
          return // The settings menu is temporarily disabled
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
