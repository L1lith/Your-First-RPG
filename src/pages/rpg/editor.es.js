import defaultGame from '!!raw-loader!../../boiler/codeEditorTemplate-es'
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
        <title>🛠️ La editora de juegos</title>
        <meta name="description" content="Crea tu propio juego de rol con este editor" />
      </Helmet>
      <h1>#4.3 🛠️ La editora de juegos</h1>
      <p>
        ¡Construye tu propio juego! Asegúrate de presionar el botón ☁️ y compartir tu URL.
        JavaScript debe estar habilitado en su navegador para usar el editor de juegos.
        <br />
        Advertencia: debes guardar tu URL o los datos de tu juego podrían perderse.
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
        Siéntase libre de presionar el ❌ para eliminar el código de inicio. ¡Intenta voltear tu
        teléfono hacia un lado si estás en un dispositivo móvil!
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
