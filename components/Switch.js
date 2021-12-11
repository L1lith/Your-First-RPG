import styles from '../styles/Switch.module.scss'
import { useState, useRef } from 'react'

function Switch(props) {
  const { rounded = false, offLabel, onLabel, onChange, value = false } = props
  const [isActive, setActive] = useState(!!value)
  const inputRef = useRef(null)
  return (
    <label
      className={
        styles.switch +
        (rounded ? ' ' + styles.rounded : '') +
        (isActive ? ' ' + styles['switch-active'] : '')
      }>
      <input
        ref={inputRef}
        type="checkbox"
        value={isActive}
        onChange={() => {
          const nowActive = !isActive
          setActive(nowActive)
          if (typeof onChange == 'function') {
            try {
              onChange(nowActive)
            } catch (error) {
              console.error(error)
            }
          }
        }}
      />
      <span className={styles.slider + (isActive ? ' ' + styles['slider-active'] : '')}></span>
      {typeof offLabel === 'string' ? <h3 className={styles.offLabel}>{offLabel}</h3> : null}
      {typeof onLabel === 'string' ? <h3 className={styles.onLabel}>{onLabel}</h3> : null}
    </label>
  )
}

export default Switch
