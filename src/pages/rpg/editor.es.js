import CodeSandbox from '../../components/CodeSandbox'
import Link from '../../components/TranslatedLink'
import { editorModule } from '../../styles/rpg/editor.module.scss'
import { Helmet } from 'react-helmet'

const defaultGame = `function avisoInteligente(pregunta) {
  var output = null
  while(output === null || output.trim().length < 1) {
      output = prompt(pregunta)
  }
  return output.trim()
}

function obtenerAccion(pregunta, listaDeAccion) { 
  // Aquí damos una lista de posibles acciones y reintentamos hasta que el usuario proporcione una respuesta válida
  let respuesta = null
  while (!listaDeAccion.includes(answer)) {
    respuesta = avisoInteligente(pregunta + " - possible actions: " + listaDeAccion.join(", ")) // Here we convert the list to a string by joining all of its contents with a comma and a space
  }
  return respuesta
}

//////////
// INFO //
//////////
// Si te quedas atascado o quieres aprender a hacer más cosas, considera consultar la sección de recursos https://l1lith.github.io/Intro-Coding-Concepts#resources
// ¡Además, no tengas miedo de googlearlo!
///////////

var nombre = avisoInteligente("¿Cuál es su nombre?")

alert("Te despiertas en una playa extraña. '" + nombre + " está escrito en el interior de tu camisa.")

while (true) { // Atrapamos al usuario en este bucle hasta que sale de la playa
  const proximaAccion = obtenerAccion("Que te gustaría hacer?", ["espere", "explorar la playa", "salir de la playa"]) // Lists are surrounded by square brackets and separated by commas

  if (proximaAccion === "espere") {
      alert("Espera alrededor. El ladrido de las gaviotas y el chapoteo del océano te arrullan en un sueño profundo.  ")
  } else if (proximaAccion === "explorar la playa") {
      alert("Encuentras una gran concha de ostra. Años de bombardeo por las olas lo han dejado quebradizo y astillado, pero sus curvas siguen siendo hermosas y perladas.")
  } else if (proximaAccion === "salir de la playa") {
      break // La palabra clave break nos saca del bucle actual
  }
}


const direccion = obtenerAccion("Al salir de la playa, llega al borde de una división entre un bosque oscuro y una cueva gigante en la ladera de la montaña. ¿En qué dirección te gustaría ir?", ["entrar en el bosque", "entrar en la cueva", "volver a la playa"])

// QUE HACER: Continuar la aventura :)`

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
