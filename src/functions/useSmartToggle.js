import useClickToggle from './useClickToggle'
import useHover from './useHover'
import mergeRefs from './mergeRefs'
import { useRef, useEffect, useState } from 'react'

function useSmartToggle() {
  const myRef = useRef(null)
  const [active, setActive] = useState(false)

  const [hoverRef, isHovered] = useHover()
  const [toggleRef, isToggled] = useClickToggle()

  const shouldBeActive = isHovered || isToggled
  if (shouldBeActive !== active) {
    setActive(shouldBeActive)
  }
  return [mergeRefs(hoverRef, toggleRef), active]
}

export default useSmartToggle
