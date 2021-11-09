import isChildNull from '../functions/isChildNull'
import styles from '../styles/EasterEgg.module.scss'
import { useState, Fragment } from 'react'

function EasterEgg(props) {
  if (isChildNull(props.children)) throw new Error('Children are required for easter :)')
  const [isActive, setActive] = useState(false)
  return (
    <Fragment>
      <span
        className={styles['easter-egg']}
        onClick={() => {
          setActive(!isActive) // Toggleable
        }}>
        {isActive === true ? '🐣' : '🥚'}
      </span>
      {isActive === true ? props.children : null}
    </Fragment>
  )
}

export default EasterEgg
