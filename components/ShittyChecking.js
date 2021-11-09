import { useState } from 'react'
import styles from '../styles/ShittyChecking.module.scss'

function ShittyChecking() {
  const [opened, setOpened] = useState(false)
  return (
    <div className={styles['checking-example']}>
      <span className={styles['app-title']}>🍎 Accounting</span>
      <span className={styles.balance}>
        {opened === true ? (
          'Balance: Unavailable'
        ) : (
          <button
            onClick={() => {
              setOpened(true)
            }}
            className={styles.enter}>
            View your Balance
          </button>
        )}
      </span>
      <span className={styles.info}>
        {opened !== true
          ? null
          : 'Please close the app and wait for your next transaction notification.'}
      </span>
    </div>
  )
}

export default ShittyChecking
