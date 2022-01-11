import CodeSandbox from '../../components/CodeSandbox'
import Expression from '../../components/Dictionary/es/Expression'
import FunctionDef from '../../components/Dictionary/es/FunctionDef'
import Input from '../../components/Dictionary/es/Input'
import Interpreter from '../../components/Dictionary/es/Interpreter'
import Output from '../../components/Dictionary/es/Output'
import Variable from '../../components/Dictionary/es/Variable'
import ShittyChecking from '../../components/ShittyChecking'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function EssentialTools() {
  return (
    <div>
      <Helmet>
        <title>🔨 Herramientas esenciales</title>
      </Helmet>
      <h1>#3.2 🔨 Herramientas esenciales</h1>
      <span className="introCard">
        <YTVideo url="himmatLe7aQ" query={{ start: 32 }} thumbnail="/images/melinda-mae.jpg" />
        <span>How do you swallow a coding lesson? One byte at a time</span>
      </span>

      <p>
        Probablemente tenga mucha información en su cabeza de la última sección, intente hacer todo
        lo posible para conectar esa información con las próximas tareas. En esta sección
        aprenderemos algunas herramientas 🔨 que nos ayudarán a construir modelos lógicos en
        JavaScript de manera más efectiva. ¡Una vez que termines esta sección, conocerás la
        codificación básica! Si te sientes abrumado, considera tomarte un descanso.
        <br />
        <br />
        También usaremos el modo "terminal" en lugar del modo "<Expression /> evaluator" en nuestros
        editores, por lo que verá algunas cosas que dicen "console.log (...)", y la salida de
        nuestro programa será lo que esté dentro del paréntesis ( esto se llama una <FunctionDef />,
        hay más sobre esto a continuación).
      </p>
      <div>
        <h2>Variables</h2>
        <p>
          Podemos crear <Variable>variables</Variable> para almacenar (guardar) valores de datos
          para su uso posterior. En un modelo lógico básico en el que solo tenemos{' '}
          <Input>inputs</Input> y <Output>outputs</Output>, se vuelve increíblemente difícil tratar
          con datos que persisten (deben guardarse). Digamos que está escribiendo una aplicación de
          cuenta corriente, pero no puede guardar ningún dato. El usuario puede ver una notificación
          que dice "Acabas de gastar $ 10.52" y, sin embargo, cada vez que abre la aplicación es
          recibido con esto:
          <br />
          <span className="bold">(intenta usar la aplicación a continuación)</span>
        </p>

        <ShittyChecking />

        <p>
          ¡Esto sería tan molesto! En lugar de hacer esto, almacenamos{' '}
          <Variable>variables</Variable> en nuestra memoria (o en este caso, en la memoria de la
          computadora) dándoles nombres, y luego podemos recuperarlas o modificarlas más adelante
          cuando las necesitemos.
          <br />
          <br />
          Aquí nombramos una <Variable /> llamada saldo (tenga en cuenta que todavía no le damos
          ningún valor, por lo que por defecto es undefined)
        </p>
        <CodeSandbox className="mini" value={'var balance\nconsole.log(balance)'} consoleMode />
        <p>
          Podemos establecer un valor usando el operador de asignación "=" y poniendo el valor que
          queremos después, y una vez que hayamos hecho esto, podemos ver que nuestra <Variable />{' '}
          tiene un valor ahora :)
        </p>
        <CodeSandbox
          className="mini"
          value={'var balance = 14.24\nconsole.log(balance)'}
          consoleMode
        />
      </div>
      <div className="functions">
        <h2>Functions</h2>
        <p>
          Las <FunctionDef>functions</FunctionDef> le permiten crear piezas de código reutilizables
          que sirven como herramienta (como un modelo de cómo hacer algo). Las funciones tienen un
          nombre, un conjunto de <Input>inputs</Input>, una sección de código y una{' '}
          <Output>output</Output> (usamos "retorno" para especificar la <Output>output</Output>).
          Las <FunctionDef>functions</FunctionDef> pueden ahorrarle mucho tiempo porque puede
          reutilizar su <FunctionDef>function</FunctionDef> varias veces con diferentes{' '}
          <Input>Inputs</Input>, en lugar de tener que escribir ese código una y otra vez. Las{' '}
          <FunctionDef>functions</FunctionDef> usan paréntesis para crear sus <Input>inputs</Input>{' '}
          y corchetes (se ven así {}). Después de haber creado nuestra <FunctionDef />, usamos
          paréntesis nuevamente para llamarla (llamar a una <FunctionDef /> significa ejecutarla).
          La parte "console.log" de nuestro código es un ejemplo de una <FunctionDef /> (en este
          caso, para <Output /> algunos datos). Esta <FunctionDef>function</FunctionDef> no tiene
          que ser creada por nosotros porque el <Interpreter>JS Interpreter</Interpreter> nos la
          proporciona automáticamente. Se llama (llamar a una <FunctionDef>function</FunctionDef>{' '}
          significa ejecutarla) con paréntesis y puede hacer diferentes cosas dependiendo de cuál
          sea la <Input /> que le pongamos (que en el ejemplo anterior era el valor actual de la{' '}
          <Variable /> balance).
        </p>
        <h2>Addition Function</h2>
        <p>
          While this <FunctionDef /> is mostly redundant, you could easily make a <FunctionDef /> to
          add two numbers together.
        </p>
        <CodeSandbox
          consoleMode
          value={'function add(a, b){\n    return a + b\n}'}
          className="short"
        />
        <p>
          The <Output /> is empty because we didn't log anything to the console.
        </p>
      </div>
      <div className="console">
        <h2>More about the Console</h2>
        On the previous page I was using the "JavaScript Expression Evaluator". On the right you
        would see what <Output /> of the <Interpreter>JS interpreter</Interpreter> evaluating the
        code on the left side. Normally when we're coding we are running our code from a terminal,
        and we see the <Output /> of the console.log <FunctionDef /> in real-time instead of seeing
        the <Output /> of the JS evaluation. We only need to <Output /> values using console.log
        when we as the developer (or coder) want to know what those values are, that way our
        program's <Output /> doesn't get super cluttered.
      </div>
      <CodeSandbox
        consoleMode
        value={'function add(a, b){\n    return a + b\n}\nconsole.log(add(14, 16))'}
        className="short"
      />
      <div className="parenthesis">
        <h2>Parenthesis</h2>
        Not only can you use parenthesis to change the ordering of math{' '}
        <Expression>expressions</Expression>, but you can also use parenthesis to change the
        ordering of any other kind of <Expression />. Here are some example of changing the order of
        code evaluation using parenthesis for math and non-math purposes.
        <br />
        <br />
        <h3>Math Without Parenthesis</h3>
        <CodeSandbox consoleMode value="console.log(10 * 3 + 4)" className="mini" />
        <h3>Math With Parenthesis</h3>
        <CodeSandbox consoleMode value="console.log(10 * (3 + 4))" className="mini" />
        <h3>Boolean logic without Parenthesis</h3>
        <CodeSandbox consoleMode value="console.log(false && true || true)" className="mini" />
        <h3>Boolean logic with Parenthesis</h3>
        <CodeSandbox consoleMode value="console.log(false && (true || true))" className="mini" />
      </div>
      <br />
      <Link className="next" to="/rpg">
        Next: #4.0 Building your Text RPG
      </Link>
    </div>
  )
}
