import { useState } from 'react'
import { checkingExample, appTitle, balance, info } from '../styles/ShittyChecking.module.scss'

function ShittyChecking() {
  const [opened, setOpened] = useState(false)
  return (
    <div className={checkingExample}>
      <span className={appTitle}>🍎 Accounting</span>
      <span className={balance}>
        {opened === true ? (
          'Balance: Unavailable'
        ) : (
          <button
            onClick={() => {
              setOpened(true)
            }}>
            View your Balance
          </button>
        )}
      </span>
      <span className={info}>
        {opened !== true
          ? null
          : 'Please close the app and wait for your next transaction notification.'}
      </span>
    </div>
  )
}

export default ShittyChecking
