import { useState } from 'react'

function Editor(props) {
  return (
    <div id="editor">
      <textarea value={code} onChange={event => setCode(event.target.value)} />
      <ScratchBlocks blockStyle="scratch3">{code}</ScratchBlocks>
    </div>
  )
}

export default Editor
