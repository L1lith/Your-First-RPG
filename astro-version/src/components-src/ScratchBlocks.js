import { useRef, useEffect } from 'react'

const ScratchBlocks = ({ blockStyle, languages, children, ...props }) => {
  const ref = useRef(null)

  useEffect(() => {
    console.log('hi')
    console.log(
      import('scratchblocks')
        .then(sbexports => {
          const scratchblocks = sbexports.default

          let options = {}
          if (blockStyle !== undefined) options.style = blockStyle
          if (languages !== undefined) options.languages = languages

          const doc = scratchblocks.parse(children, options)
          const svg = scratchblocks.render(doc, options)

          ref.current.innerHTML = ''
          ref.current.appendChild(svg)
        })
        .catch(console.error)
    )
  }, [blockStyle, languages, children])

  return <div ref={ref} {...props} />
}

export default ScratchBlocks
