import defaultGame from '!!raw-loader!../../boiler/codeEditorTemplate'
import CodeSandbox from '../../components/CodeSandbox'
import Link from '../../components/TranslatedLink'
import { editorModule } from '../../styles/rpg/editor.module.scss'
import { Helmet } from 'react-helmet'

function Editor() {
  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search)
  //   const gameCode = params.get('code')
  //   if (typeof gameCode == 'string' && gameCode.length > 1) setCode(gameCode)
  // })
  return (
    <div>
      <Helmet>
        <title>🛠️ The Game Editor</title>
        <meta name="description" content="Build an RPG game of your own with this editor" />
      </Helmet>
      <h1>#4.3 🛠️ The Game Editor</h1>
      <p>
        Build your own game! Be sure to press the ☁️ button and share your url. JavaScript must be
        enabled in your browser to use the game editor.
        <br /> Warning: You must save your URL or your game data could be lost.
      </p>
      <CodeSandbox
        className={editorModule}
        codeQueryParam={'code'}
        value={defaultGame}
        vertical
        consoleMode
        disableAutoRun
      />
      <p>
        Feel free to press the ❌ to delete the starter code. Try flipping your phone sideways if
        you're on mobile!
      </p>
      <p>
        If you'd like to learn more about JavaScript, or you'd like to support me, continue on to
        the next page.
      </p>
      <Link className="next" to="/rpg/summary">
        Next: #4.4 🔭 You Won! Further Reading
      </Link>
    </div>
  )
}

export default Editor
