import CodeSandbox from '../../components/CodeSandbox'
import Expression from '../../components/Dictionary/es/Expression'
import FunctionDef from '../../components/Dictionary/es/FunctionDef'
import Input from '../../components/Dictionary/es/Input'
import Interpreter from '../../components/Dictionary/es/Interpreter'
import JS from '../../components/Dictionary/es/JS'
import Output from '../../components/Dictionary/es/Output'
import Variable from '../../components/Dictionary/es/Variable'
import ShittyChecking from '../../components/ShittyChecking'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function EssentialTools() {
  return (
    <>
      <Helmet>
        <title>馃敤 Herramientas esenciales</title>
        <meta
          name="description"
          content="Aprenda las herramientas de codificaci贸n esenciales para comenzar en JavaScript "
        />
      </Helmet>
      <h1>#3.2 馃敤 Herramientas esenciales</h1>
      {
        null /*<span className="introCard">
        <YTVideo url="himmatLe7aQ" query={{ start: 32 }} thumbnail="/images/melinda-mae.jpg" />
        <span>How do you swallow a coding lesson? One byte at a time</span>
      </span> */
      }

      <p>
        Probablemente tenga mucha informaci贸n en su cabeza de la 煤ltima secci贸n, intente hacer todo
        lo posible para conectar esa informaci贸n con las pr贸ximas tareas. En esta secci贸n
        aprenderemos algunas herramientas 馃敤 que nos ayudar谩n a construir modelos l贸gicos en
        JavaScript de manera m谩s efectiva. 隆Una vez que termines esta secci贸n, conocer谩s la
        codificaci贸n b谩sica! Si te sientes abrumado, considera tomarte un descanso.
        <br />
        <br />
        Tambi茅n usaremos el modo "terminal" en lugar del modo "<Expression /> evaluator" en nuestros
        editores, por lo que ver谩 algunas cosas que dicen "console.log (...)", y la <Output /> de
        nuestro programa ser谩 lo que est茅 dentro del parenthesis ( esto se llama una <FunctionDef />
        , hay m谩s sobre esto a continuaci贸n).
      </p>
      <div>
        <h2>Variables</h2>
        <p>
          Podemos crear <Variable>variables</Variable> para almacenar (guardar) valores de datos
          para su uso posterior. En un modelo l贸gico b谩sico en el que solo tenemos{' '}
          <Input>inputs</Input> y <Output>outputs</Output>, se vuelve incre铆blemente dif铆cil tratar
          con datos que persisten (deben guardarse). Digamos que est谩 escribiendo una aplicaci贸n de
          cuenta corriente, pero no puede guardar ning煤n dato. El usuario puede ver una notificaci贸n
          que dice "Acabas de gastar $ 10.52" y, sin embargo, cada vez que abre la aplicaci贸n es
          recibido con esto:
          <br />
          <span className="bold">(intenta usar la aplicaci贸n a continuaci贸n)</span>
        </p>

        <ShittyChecking />

        <p>
          隆Esto ser铆a tan molesto! En lugar de hacer esto, almacenamos{' '}
          <Variable>variables</Variable> en nuestra memoria (o en este caso, en la memoria de la
          computadora) d谩ndoles nombres, y luego podemos recuperarlas o modificarlas m谩s adelante
          cuando las necesitemos.
          <br />
          <br />
          Aqu铆 nombramos una <Variable /> llamada saldo (tenga en cuenta que todav铆a no le damos
          ning煤n valor, por lo que por defecto es undefined)
        </p>
        <CodeSandbox className="mini" value={'var balance\nconsole.log(balance)'} consoleMode />
        <p>
          Podemos establecer un valor usando el operador de asignaci贸n "=" y poniendo el valor que
          queremos despu茅s, y una vez que hayamos hecho esto, podemos ver que nuestra <Variable />{' '}
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
          Las <FunctionDef>functions</FunctionDef> le permiten crear piezas de c贸digo reutilizables
          que sirven como herramienta (como un modelo de c贸mo hacer algo). Las funciones tienen un
          nombre, un conjunto de <Input>inputs</Input>, una secci贸n de c贸digo y una{' '}
          <Output>output</Output> (usamos "retorno" para especificar la <Output>output</Output>).
          Las <FunctionDef>functions</FunctionDef> pueden ahorrarle mucho tiempo porque puede
          reutilizar su <FunctionDef>function</FunctionDef> varias veces con diferentes{' '}
          <Input>Inputs</Input>, en lugar de tener que escribir ese c贸digo una y otra vez. Las{' '}
          <FunctionDef>functions</FunctionDef> usan parenthesis para crear sus <Input>inputs</Input>{' '}
          y corchetes (se ven as铆 {}). Despu茅s de haber creado nuestra <FunctionDef />, usamos
          parenthesis nuevamente para llamarla (llamar a una <FunctionDef /> significa ejecutarla).
          La parte "console.log" de nuestro c贸digo es un ejemplo de una <FunctionDef /> (en este
          caso, para <Output /> algunos datos). Esta <FunctionDef>function</FunctionDef> no tiene
          que ser creada por nosotros porque el <Interpreter>JS Interpreter</Interpreter> nos la
          proporciona autom谩ticamente. Se llama (llamar a una <FunctionDef>function</FunctionDef>{' '}
          significa ejecutarla) con parenthesis y puede hacer diferentes cosas dependiendo de cu谩l
          sea la <Input /> que le pongamos (que en el ejemplo anterior era el valor actual de la{' '}
          <Variable /> balance).
        </p>
        <h2>Addition Function</h2>
        <p>
          Si bien esta <FunctionDef /> es en su mayor铆a redundante, podr铆a crear f谩cilmente una{' '}
          <FunctionDef /> para sumar dos n煤meros.
        </p>
        <CodeSandbox
          consoleMode
          value={'function agregar(a, b){\n    return a + b\n}'}
          className="short"
        />
        <p>
          El <Output /> est谩 vac铆o porque no registramos nada en la consola.
        </p>
      </div>
      <div className="console">
        <h2>More about the Console</h2>
        M谩s sobre la Consola En la p谩gina anterior, estaba usando el "Evaluador de expresiones de
        JavaScript". A la derecha, ver谩 qu茅 <Output /> del <Interpreter>
          JS interpreter
        </Interpreter>{' '}
        eval煤a el c贸digo en el lado izquierdo. Normalmente, cuando codificamos, ejecutamos nuestro
        c贸digo desde una terminal y vemos el resultado de la <FunctionDef /> console.log en tiempo
        real en lugar de ver el resultado de la evaluaci贸n del c贸digo <JS />. Solo necesitamos
        generar valores usando console.log cuando nosotros, como desarrolladores (o codificadores),
        queremos saber cu谩les son esos valores, de esa manera la <Output /> de nuestro programa no
        se abarrota demasiado.
      </div>
      <CodeSandbox
        consoleMode
        value={'function agregar(a, b){\n    return a + b\n}\nconsole.log(agregar(14, 16))'}
        className="short"
      />
      <div className="parenthesis">
        <h2>Parenthesis</h2>
        Par茅ntesis No solo puede usar parenthesis para cambiar el orden de las{' '}
        <Expression>expressions</Expression> matem谩ticas, sino que tambi茅n puede usar parenthesis
        para cambiar el orden de cualquier otro tipo de <Expression />. Estos son algunos ejemplos
        de c贸mo cambiar el orden de evaluaci贸n del c贸digo usando parenthesis para fines matem谩ticos
        y no matem谩ticos.
        <br />
        <br />
        <h3>Matem谩ticas sin parenthesis</h3>
        <CodeSandbox consoleMode value="console.log(10 * 3 + 4)" className="mini" />
        <h3>Matem谩ticas con parenthesis</h3>
        <CodeSandbox consoleMode value="console.log(10 * (3 + 4))" className="mini" />
        <h3>L贸gica Boolean sin parenthesis</h3>
        <CodeSandbox consoleMode value="console.log(false && true || true)" className="mini" />
        <h3>L贸gica Boolean sin parenthesis</h3>
        <CodeSandbox consoleMode value="console.log(false && (true || true))" className="mini" />
      </div>
      <br />
      <Link className="next" to="/rpg">
        Siguiente: #4.0 Construyendo un juego!
      </Link>
    </>
  )
}
