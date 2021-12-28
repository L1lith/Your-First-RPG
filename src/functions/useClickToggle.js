import { useState, useEffect, useRef } from 'react'

// Hook
function useClickToggle() {
  const [active, setActive] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  })
  return [ref, active]
}

export default useClickToggle
