import ScratchBlocks from '../../components/ScratchBlocks'
import { useState } from 'react'

function Editor(props) {
  const [code, setCode] = useState(`when green flag clicked
forever
  move (10) steps
end`)
  return (
    <div id="editor">
      <textarea value={code} onChange={event => setCode(event.target.value)} />
      <ScratchBlocks blockStyle="scratch3">{code}</ScratchBlocks>
    </div>
  )
}

export default Editor
