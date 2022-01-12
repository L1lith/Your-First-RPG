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
          value={"console.log(4 + 6)\n// This part doesn't have to be valid JavaScript code"}
          consoleMode
          disableAutoRun
          className="mini"
        />
      </div>
      <div className="js-io">
        <h2>Input/Output for Communicating with the Player</h2>
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
          value="alert('Your princess is in another castle')"
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
            "var user = prompt('What is your name?')\nalert('Wishing ' + user + ' good fortune 💰')"
          }
          consoleMode
          disableAutoRun
          className="mini"
        />
        <p>
          Note: In normal web development the use of the alert and prompt functions is discouraged.
          This is because creating dialogue inside of the page (using HTML) rather than inside of
          the browsers pop-up boxes is less jarring.
        </p>
      </div>
      <div className="flow-control">
        <h2>Flow Control</h2>
        <p>
          Flow control allows us to establish branching choices in our logic model using{' '}
          <BooleanDef /> logic. You might say something along the lines of "if x is true then do y,
          or else do z". It allows us to create flexible code that chooses the appropriate path to
          take in order to properly complete the task. You can read more about flow control{' '}
          <a
            target="_blank"
            href="https://vanessamarely.medium.com/estructuras-de-control-de-flujo-en-javascript-c848337a5c02">
            here.
          </a>
        </p>
        <h3>if/else</h3>
        <p>
          You can use combinations of if and else to make powerful decision making models using{' '}
          <Expression>expressions</Expression> that return <BooleanDef>booleans</BooleanDef> to ask
          yes or no questions. Here we have an example of doing something based on the user's input
        </p>
        <CodeSandbox
          value={
            '// Notice that any spaces or uppercases will cause the equality to fail, so "YES" will give the wrong result\nif(prompt("Do you like oatmeal raisin cookies?") === "yes") { \n    alert("You have good taste in 🍪")\n} else { // They entered anything besides exactly "yes"\n    alert("Maybe 🍪 just aren\'t your thing?")\n}'
          }
          consoleMode
          disableAutoRun
          className="short"
        />
        <p>We can also chain multiple ifs together to have multiple outcomes</p>

        <CodeSandbox
          value={
            'var favoriteCookie = prompt("What\'s your favorite kind of cookie?")\nif(favoriteCookie === "oatmeal" || favoriteCookie === "oatmeal raisin") { \n    alert("You have good taste in 🍪")\n} else if (favoriteCookie === "chocolate chip") {\n    alert("Chocolate chip is the second best cookie so that\'s understandable")\n} else {\n    alert("Maybe 🍪 just aren\'t your thing?")\n}'
          }
          consoleMode
          disableAutoRun
          className="short"
        />
        <h3>while</h3>
        <p>
          You can use the while loop to keep doing something until the <BooleanDef /> <Expression />{' '}
          returns false. Look here how we can repeatedly ask the user for their name until they
          return a valid name (if a name is missing it is invalid, if the user exits the prompt the
          prompt it returns null so we must retry).
        </p>
        <CodeSandbox
          disableAutoRun
          consoleMode
          value={
            'var name\nwhile(!name) {\n    name = prompt("What is your name adventurer?")\n}\nalert("You wake up on a strange beach. \'" + name + "\' is written on the inside of your shirt.")'
          }
          className="short"
        />
      </div>
      <div>
        <h2>Better text Handling</h2>
        <p>
          I've created this function to help you ensure you receive valid input. Strings provide
          .trim(...) function to remove all spaces from the beginning and end. Here we check that
          the trimmed string is at least 1 character long (meaning that there's at least 1 non-space
          character). Then we return the trimmed string as we probably don't care about the spaces
          and it can make it harder to match strings later (for example "yes " === "yes" will return
          false, but if we trim the text we don't have this problem)
        </p>
        <CodeSandbox
          disableAutoRun
          consoleMode
          value={`function smartPrompt(question) {
    var output = null
    // While will keep running the code inside it over and over until the expression evaluates to false
    while(output === null || output.trim().length < 1) { 
        output = prompt(question)
    }
    return output.trim()
}

var name = smartPrompt("What is your name adventurer?")

alert("You wake up on a strange beach. '" + name + "' is written on the inside of your shirt.")`}
        />
        <p>
          Here we combine the .toLowerCase <FunctionDef /> (you can use it to make any <StringDef />{' '}
          lowercase) and our smartPrompt <FunctionDef />. Notice how when we run it it still
          recognizes a yes input even if it has whitespace around it or isn't lowercase.
        </p>
        <CodeSandbox
          value={`function smartPrompt(question) {
    var output = null
    while(output === null || output.trim().length < 1) {
        output = prompt(question)
    }
    return output.trim()
}
// Now it accepts "  yes  ", "YES", "  yEs   ", etc
if(smartPrompt("Do you like oatmeal raisin cookies?").toLowerCase() === "yes") { \n    alert("You have good taste in 🍪")\n} else {\n    alert("Maybe 🍪 just aren\'t your thing?")\n}`}
          consoleMode
          disableAutoRun
        />
      </div>
      <Link className="next" to="/rpg/publishing">
        Next: #4.2 🏆 Compartiendo tu juego RPG
      </Link>
    </div>
  )
}
