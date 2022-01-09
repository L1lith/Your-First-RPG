import CodeSandbox from '../../components/CodeSandbox'
import BooleanDef from '../../components/Dictionary/es/BooleanDef'
import Expression from '../../components/Dictionary/es/Expression'
import Input from '../../components/Dictionary/es/Input'
import Interpreter from '../../components/Dictionary/es/Interpreter'
import JS from '../../components/Dictionary/es/JS'
import Operator from '../../components/Dictionary/es/Operator'
import Output from '../../components/Dictionary/es/Output'
import StringDef from '../../components/Dictionary/es/StringDef'
import Variable from '../../components/Dictionary/es/Variable'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { primitives, primitivesList } from '../../styles/coding/primitives.module.scss'
import { Helmet } from 'react-helmet'

const Primitives = () => (
  <div className={primitives}>
    <Helmet>
      <title>📊 Tipos de datos básicos</title>
    </Helmet>
    <h2>#3.1 📊 Tipos de datos básicos</h2>
    <br />
    <span className="introCard">
      <YTVideo url="_4TPlwwHM8Q" thumbnail="/images/blender-horror.jpg" />
      <span>
        Puede leer más{' '}
        <a target="_blank" href="https://www.tecnologia-informatica.com/el-sistema-binario/">
          aquí
        </a>{' '}
        si desea una explicación más detallada sobre cómo los valores binarios se convierten en
        tipos de datos más complejos.
      </span>
    </span>
    <br />
    <p>
      En esta sección, pasaremos de trabajar solo con lógica <BooleanDef /> a escribir JavaScript
      que funcione. Los primitivos son los tipos básicos de datos en JavaScript. Hefre son las
      primitivas básicas:
    </p>
    <ul className={primitivesList}>
      <li>
        <BooleanDef>Boolean</BooleanDef>
      </li>
      <li>Number</li>
      <li>
        <StringDef>String</StringDef>
      </li>
      <li>undefined</li>
      <li>null</li>
    </ul>
    <p>
      Ahora detallaré cada tipo de datos y sus <Operator>operators</Operator>, luego, en la página
      siguiente, proporcionaré más ejemplos de cómo se pueden usar juntos. Además, puede editar la{' '}
      <Input /> de todos los ejemplos de código a continuación. Si su sintaxis no es válida (esto
      significa que su gramática de codificación es incorrecta), recibirá un error en lugar de la{' '}
      <Output /> que esperaba porque el <Interpreter>JS interpreter</Interpreter> se confundirá.
      <br />
      <br />
      El lado izquierdo del editor es el código que le damos al <Interpreter /> y el lado derecho es
      el resultado que nos da. Actualmente estamos en el modo "<Expression>
        Expression
      </Expression>{' '}
      Evaluator", lo que significa que tomará cualquier código que esté en el lado izquierdo y lo
      reducirá a un solo valor en el lado derecho.
    </p>
    <div className="type boolean">
      <h2>Booleans</h2>
      <p>
        JavaScript tiene soporte integrado para <BooleanDef>booleans</BooleanDef>.
      </p>
      <CodeSandbox value="true" className="mini" />
      <CodeSandbox value="false" className="mini" />
      <h3>Or Operations</h3>
      <p>
        El <Operator /> "Or" se escribe como "||" en JavaScript, y se usa para comparar dos valores{' '}
        <BooleanDef>booleans</BooleanDef>. Devuelve verdadero si alguno de los valores{' '}
        <BooleanDef>booleans</BooleanDef> al lado es verdadero; de lo contrario, devuelve falso.
      </p>
      <CodeSandbox value="true || false" className="mini" />
      <CodeSandbox value="false || true" className="mini" />
      <CodeSandbox value="false || false" className="mini" />
      <h3>Not Operations</h3>
      <p>
        El <Operator /> "No" se escribe como "!" en JavaScript, y devuelve lo contrario.
      </p>
      <CodeSandbox value="!true" className="mini" />
      <CodeSandbox value="!false" className="mini" />
      <h3>And Operations</h3>
      <p>
        El <Operator /> "Y" está escrito como "&&" en JavaScript. Devuelve verdadero si los dos
        valores <BooleanDef>booleans</BooleanDef> junto a él son verdaderos; de lo contrario,
        devuelve falso.
      </p>
      <CodeSandbox value="true && true" className="mini" />
      <CodeSandbox value="true && false" className="mini" />
      <CodeSandbox value="false && false" className="mini" />
    </div>
    <div className="type numbers">
      <h2>Numbers</h2>
      <p>
        Los Numbers pueden ser enteros (números enteros como 33) o flotantes (es decir, decimales
        como 45.512). Algunas operaciones básicas son sumar, multiplicar, dividir y restar. Además
        de cambiar los números, también puede compararlos (usando símbolos como &gt;, &lt;, or ≥)
        para <Output /> valores <BooleanDef />.
      </p>
      <h3>Addition/Subtraction</h3>
      <CodeSandbox value="12 + 12" className="mini" />
      <CodeSandbox value="30 - 12" className="mini" />
      <h3>Greater than/Less than</h3>
      <p>
        The greater than and less than <Operator>operators</Operator> return <BooleanDef /> values.
      </p>
      <CodeSandbox value="12 > 10" className="mini" />
      <CodeSandbox value="12 < 10" className="mini" />
      <CodeSandbox value="5 >= 5" className="mini" />
      <CodeSandbox value="6 <= 5" className="mini" />
      <h3>Multiply/Divide</h3>
      <CodeSandbox value="32 * 11" className="mini" />
      <CodeSandbox value="4 / 12" className="mini" />
    </div>
    <div className="type strings">
      <h2>Strings</h2>
      <p>
        <StringDef>Strings</StringDef> are collections of text (like someones name, an address,
        etc). They are written by surrounding the text in single or double quotes.
      </p>
      <CodeSandbox value={'"I like chocolate milk"'} className="mini" />
      <CodeSandbox value={"'my namea borat'"} className="mini" />
      <p>
        They can also be added together (they are simply squished together, not added like numbers)
      </p>
      <CodeSandbox value={"'beep' + 'bop'"} className="mini" />
      <CodeSandbox value={"'9' + '10'"} className="mini" />
    </div>
    <div className="type undefined">
      <h2>undefined</h2>
      <p>
        The value undefined is used to represent a value that has not been assigned anything else.
        It's basically the universal placeholder value. Undefined is the value given to{' '}
        <Variable>variables</Variable> if we don't given them a value ourselves.
      </p>
      <CodeSandbox value="undefined" className="mini" />
    </div>
    <div className="type null">
      <h2>null</h2>
      <p>
        The value null is used to represent the value "nothing". It's different from undefined
        because it means the coder intentionally made it nothing rather than it just being a missing
        value.
      </p>
      <CodeSandbox value="null" className="mini" />
    </div>
    <div className="equality">
      <h2>Equality</h2>
      <p>
        To check whether two values are exactly the same we can use the strict equality{' ' + ''}
        <Operator />
        {' ' + ''}
        "==="
      </p>
      <CodeSandbox value="1 === 1" className="mini" />
      <CodeSandbox value={'1 === "1"'} className="mini" />
      <CodeSandbox value={'1 === 1.1'} className="mini" />
    </div>
    <br />
    <p>
      In the next section we'll be using these primitive values so you can see a little bit more why
      they are useful. You can read in greater detail about <JS>JS's</JS> data types{' '}
      <a target="_blank" href="https://javascript.info/types">
        here
      </a>
    </p>
    <Link className="next" to="/coding/essential-tools">
      Siguiente: #3.2 Essential Tools
    </Link>
  </div>
)

export default Primitives
