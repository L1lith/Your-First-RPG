import { component, slider, offLabelStyle, onLabelStyle } from '../styles/SwitchModule.module.scss'
import { useState, useRef } from 'react'

function SwitchComponent(props) {
  const { rounded = true, offLabel, onLabel, onChange, value = false } = props
  const [isActive, setActive] = useState(!!value)
  const inputRef = useRef(null)
  return (
    <label
      className={
        component + (rounded ? ' ' + roundedStyle : '') + (isActive ? ' ' + switchActive : '')
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
      <span className={slider + (isActive ? ' ' + sliderActive : '')}></span>
      {typeof offLabel === 'string' ? <h3 className={offLabelStyle}>{offLabel}</h3> : null}
      {typeof onLabel === 'string' ? <h3 className={onLabelStyle}>{onLabel}</h3> : null}
    </label>
  )
}

export default SwitchComponent
