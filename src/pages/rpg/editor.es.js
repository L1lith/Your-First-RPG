import defaultGame from '!!raw-loader!../../boiler/codeEditorTemplate-es'
import CodeSandbox from '../../components/CodeSandbox'
import Link from '../../components/TranslatedLink'
import { editorModule, describeIcon, warning } from '../../styles/rpg/editor.module.scss'
import { faTimesCircle, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons'
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
        <title>🛠️ La Editora de Juegos</title>
        <meta name="description" content="Crea tu propio juego de rol con este editor" />
      </Helmet>
      <h1>#4.3 🛠️ La Editora de Juegos</h1>
      <p>
        ¡Construye tu propio juego! Asegúrate de presionar el botón{' '}
        <FontAwesomeIcon className={describeIcon} icon={faDownload} /> para guardar tu juego. A
        carga tu juego presiona el botón{' '}
        <FontAwesomeIcon className={describeIcon} icon={faUpload} />.
        <br />
      </p>
      <span className={warning}>
        Advertencia: debes guardar el archivo del juego en un lugar seguro o podría perderse.
      </span>
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
        Siéntase libre de presionar el{' '}
        <FontAwesomeIcon icon={faTimesCircle} className={describeIcon} /> para eliminar el código de
        inicio.
      </p>
      <p>
        Si desea obtener más información sobre JavaScript o si desea ayudarme, continúe con la
        página siguiente.
      </p>
      <Link className="next" to="/rpg/summary">
        Siguiente: #4.4 🔭 ¡Ganaste! Otras lecturas
      </Link>
    </div>
  )
}

export default Editor
