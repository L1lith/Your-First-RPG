import defaultGame from '!!raw-loader!../../boiler/codeEditorTemplate'
import CodeSandbox from '../../components/CodeSandbox'
import Link from '../../components/TranslatedLink'
import { editorModule, describeIcon, warning } from '../../styles/rpg/editor.module.scss'
import { faDownload, faUpload, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        Build your own game! Be sure to press the{' '}
        <FontAwesomeIcon className={describeIcon} icon={faDownload} /> button to save your game. To
        load your game press the <FontAwesomeIcon className={describeIcon} icon={faUpload} />{' '}
        button.
        <br />
      </p>
      <span className={warning}>
        Warning: You must save your game file somewhere safe or it could be lost.
      </span>
      <p className="italic">
        Need some inspiration? Want to see how other people made their games? Check out the{' '}
        <Link to="/playground">Playground!</Link>
      </p>
      <CodeSandbox
        className={editorModule}
        codeQueryParam={'code'}
        value={defaultGame}
        vertical
        consoleMode
        disableAutoRun
        savable
      />
      <p>
        Feel free to press the <FontAwesomeIcon className={describeIcon} icon={faTimesCircle} /> to
        reset the code.
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
