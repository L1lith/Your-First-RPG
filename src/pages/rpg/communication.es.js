import CodeSandbox from '../../components/CodeSandbox'
import BooleanDef from '../../components/Dictionary/es/BooleanDef'
import Expression from '../../components/Dictionary/es/Expression'
import FunctionDef from '../../components/Dictionary/es/FunctionDef'
import RPG from '../../components/Dictionary/es/RPG'
import Scope from '../../components/Dictionary/es/Scope'
import StringDef from '../../components/Dictionary/es/StringDef'
import Variable from '../../components/Dictionary/es/Variable'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { play } from '../../styles/rpg/communication.module.scss'
import { Helmet } from 'react-helmet'

export default function Communication() {
  return (
    <div className="communication">
      <Helmet>
        <title>🗣️ Comunicarse con el jugador</title>
        <meta name="description" content="Aprende a comunicarte con el jugador de tu juego" />
      </Helmet>
      <h2>#4.1 🗣️ Comunicarse con el jugador</h2>
      <span className="introCard">
        <YTVideo
          url="7yeA7a0uS3A"
          query={{ start: 29, cc_lang_pref: 'es', cc_load_policy: '1' }}
          thumbnail="/images/heman-title.jpg"
        />
        Mitad dragón mitad tigre se vende por separado
      </span>
      <p>
        Ahora que hemos establecido los conceptos básicos, apliquémonos y divirtámonos un poco 😊
        Antes de ti construye tu <RPG /> primero debemos aprender cómo obtener información y enviar
        mensajes al jugador. No sirve de nada codificar una aventura si no hay forma de interactuar
        con ella.
      </p>
      <div className="comments">
        <h2>Comments</h2>
        <p>
          Los comentarios nos permiten escribir cosas en nuestro código que son puramente para
          notación (como escribir notas en matemáticas). Cualquier cosa en la misma línea que venga
          después de "//" no se usará mientras se ejecuta el código.
          <br />
          <br />
          Podemos usar comentarios para cosas como agregar un mensaje TODO para que pueda volver a
          agregar algo más tarde, o podemos usarlo para ayudar a explicar cómo funciona nuestro
          código.
        </p>
        <CodeSandbox
          value={'console.log(4 + 6)\n// Esta parte no tiene que ser un código JavaScript válido'}
          consoleMode
          disableAutoRun
          className="mini"
        />
      </div>
      <div className="js-io">
        <h2>Input/Output para comunicarse con el reproductor</h2>
        <p>
          Si bien la modificación del contenido de una página web (realizada a través de HTML) está
          fuera del <Scope /> de este proyecto, ¡aún podemos comunicarnos con el reproductor desde
          JavaScript! Podemos hacer esto usando las funciones de aviso y alerta. A partir de ahora,
          si desea ejecutar el código en los editores,{' '}
          <span className="bold">
            primero debe presionar el botón <span className={play}>▶</span>
          </span>
          . Intente ejecutar los siguientes ejemplos:
        </p>
        <h3>Output: Alert</h3>
        <CodeSandbox
          value="alert('Tu princesa esta en otro castillo')"
          consoleMode
          disableAutoRun
          className="mini"
        />
        <h3>Input: Prompt</h3>
        <p>
          Podemos pedirle a un usuario una entrada y guardarla en una <Variable /> para usarla más
          tarde
        </p>
        <CodeSandbox
          value={
            "var nombre = prompt('¿Cuál es su nombre?')\nalert('Deseándole buena suerte a ' + nombre + ' 💰')"
          }
          consoleMode
          disableAutoRun
          className="mini"
        />
        <p>
          Nota: En el desarrollo web normal, se desaconseja el uso de las funciones de alerta y
          aviso. Esto se debe a que crear un diálogo dentro de la página (usando HTML) en lugar de
          dentro de los cuadros emergentes de los navegadores son menos discordantes.
        </p>
      </div>
      <div className="flow-control">
        <h2>Flow Control</h2>
        <p>
          El control de flujo nos permite establecer opciones de ramificación en nuestro modelo
          lógico usando lógica <BooleanDef />. Puede decir algo como "si x es cierto, entonces haga
          y, o de lo contrario haga z". Nos permite crear un código flexible que elige la ruta
          adecuada para completar correctamente la tarea. Puede leer más sobre el control de flujo{' '}
          <a
            target="_blank"
            href="https://vanessamarely.medium.com/estructuras-de-control-de-flujo-en-javascript-c848337a5c02">
            aquí.
          </a>
          <br />
        </p>
        <h3>if/else</h3>
        <p>
          Puede usar combinaciones de if y else para crear poderosos modelos de toma de decisiones
          usando <Expression>expressions</Expression> que devuelven{' '}
          <BooleanDef>booleans</BooleanDef> para hacer preguntas de sí o no. Aquí tenemos un ejemplo
          de hacer algo basado en la entrada del usuario
        </p>
        <CodeSandbox
          value={
            '// Tenga en cuenta que cualquier espacio o mayúsculas hará que la igualdad falle, por lo que "SÍ" dará un resultado incorrecto\nif(prompt("¿Te gustan las galletas de avena con pasas?") === "yes") { \n    alert("Tienes buen gusto para las 🍪")\n} else { // Ellas entraron en cualquier cosa además de exactamente "sí".\n    alert("¿Quizás las 🍪 no son lo tuyo?")\n}'
          }
          consoleMode
          disableAutoRun
          className="short"
        />
        <p>También podemos encadenar múltiples si para tener múltiples resultados.</p>

        <CodeSandbox
          value={
            'var galletaFavorita = prompt("¿Cuál es tu tipo de galleta favorita?")\nif(galletaFavorita === "avena" || galletaFavorita === "avena con pasas") { \n    alert("Tienes buen gusto para las 🍪")\n} else if (galletaFavorita === "chispas de chocolate") {\n    alert("La chispa de chocolate es la segunda mejor 🍪, así que es comprensible")\n} else {\n    alert("¿Quizás las 🍪 no son lo tuyo?")\n}'
          }
          consoleMode
          disableAutoRun
          className="short"
        />
        <h3>while</h3>
        <p>
          Puede usar el bucle while para seguir haciendo algo hasta que la <BooleanDef />{' '}
          <Expression /> devuelva falso. Mire aquí cómo podemos pedir repetidamente al usuario su
          nombre hasta que devuelva un nombre válido (si falta un nombre, no es válido, si el
          usuario sale del mensaje, el mensaje devuelve nulo, por lo que debemos volver a
          intentarlo).
        </p>
        <CodeSandbox
          disableAutoRun
          consoleMode
          value={`var nombre\nwhile(!nombre) {\n    nombre = prompt("¿Cuál es su nombre?")\n}\nalert(alert("Te despiertas en una playa extraña. '" + nombre + " está escrito en el interior de tu camisa."))\n}`}
          className="short"
        />
      </div>
      <div>
        <h2>Better text Handling</h2>
        <p>
          Creé esta <FunctionDef /> para ayudarlo a asegurarse de recibir una entrada válida. Las
          cadenas proporcionan <FunctionDef /> .trim(...) para eliminar todos los espacios al
          principio y al final. Aquí comprobamos que la cadena recortada tiene al menos 1 carácter
          de largo (lo que significa que hay al menos 1 sin espacio personaje). Luego devolvemos la
          cadena recortada ya que probablemente no nos importen los espacios y puede dificultar la
          coincidencia de cadenas más adelante (por ejemplo, "yes" === "yes" devolverá false, pero
          si recortamos el texto no tenemos este problema)
        </p>
        <CodeSandbox
          disableAutoRun
          consoleMode
          value={`function avisoInteligente(pregunta) {
    var output = null
    // While seguirá ejecutando el código dentro de él una y otra vez hasta que la expression se evalúe como false
    while(output === null || output.trim().length < 1) { 
        output = prompt(pregunta)
    }
    return output.trim()
}

var nombre = avisoInteligente("")

alert("Te despiertas en una playa extraña. '" + nombre + " está escrito en el interior de tu camisa.")`}
        />
        <p>
          Consola Ejecute el programa para ver su salida Aquí combinamos la <FunctionDef />{' '}
          .toLowerCase (puede usarla para convertir cualquier <StringDef /> en minúsculas) y nuestra{' '}
          <FunctionDef /> avisoInteligente. Observe cómo, cuando lo ejecutamos, aún reconoce una
          entrada de sí, incluso si tiene espacios en blanco alrededor o no está en minúsculas.
        </p>
        <CodeSandbox
          value={`function avisoInteligente(pregunta) {
    var output = null
    while(output === null || output.trim().length < 1) {
        output = prompt(pregunta)
    }
    return output.trim()
}
// Ahora acepta "  si  ", "SI", "  sI   ", etcétera
if(avisoInteligente("¿Te gustan las galletas de avena con pasas?").toLowerCase() === "si") { \n    alert("Tienes buen gusto para las 🍪")\n} else {\n    alert("¿Quizás las 🍪 no son lo tuyo?")\n}`}
          consoleMode
          disableAutoRun
        />
      </div>
      <Link className="next" to="/rpg/publishing">
        Siguiente: #4.2 🏆 Compartiendo tu juego RPG
      </Link>
    </div>
  )
}
