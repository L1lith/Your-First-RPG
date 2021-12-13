import useClickToggle from './useClickToggle'
import useHover from './useHover'
import { useRef, useEffect, useState } from 'react'

function useSmartToggle() {
  const myRef = useRef(null)
  const [active, setActive] = useState(false)

  const [hoverRef, isHovered] = useHover()
  const [toggleRef, isToggled] = useClickToggle()

  useEffect(() => {
    hoverRef.current = myRef.current
    toggleRef.current = myRef.current
  }, [myRef.current])
  useEffect(() => {
    setActive(isHovered || isToggled)
  }, [isHovered, isToggled])
  return [myRef, active]
}

export default useSmartToggle
