import CodeSandbox from '../../components/CodeSandbox'
import { NextSeo } from 'next-seo'

function Editor() {
  return (
    <div className="game-editor">
      <NextSeo title="Game Editor" description="Build a game of your own" />
      <h1>Game Editor</h1>
      <p>
        Build your own game! Be sure to press the ☁️ button and share your url.
        <br /> Warning: You must save your URL or your game data could be lost.
      </p>
      <CodeSandbox consoleMode sharing disableAutoRun />
    </div>
  )
}

export default Editor
