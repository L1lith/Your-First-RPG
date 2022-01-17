import useTranslation from '../functions/useTranslation'
import { checkingExample, appTitle, balance, info } from '../styles/ShittyChecking.module.scss'
import { useState } from 'react'

function ShittyChecking() {
  const [opened, setOpened] = useState(false)
  return (
    <div className={checkingExample}>
      <span className={appTitle}>{useTranslation('💸 Banking', { es: '💸 Bancario' })}</span>
      <span className={balance}>
        {opened === true ? (
          useTranslation('Balance: Unavailable', { es: 'Saldo: no disponible' })
        ) : (
          <button
            onClick={() => {
              setOpened(true)
            }}
          >
            {useTranslation('View your Balance', { es: 'Ver su Saldo' })}
          </button>
        )}
      </span>
      <span className={info}>
        {opened !== true
          ? null
          : useTranslation(
              'Please close the app and wait for your next transaction notification.',
              { es: 'Cierre la aplicación y espere la próxima notificación de transacción.' }
            )}
      </span>
    </div>
  )
}

export default ShittyChecking
