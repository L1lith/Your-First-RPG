import CodeSandbox from '../../components/CodeSandbox'
import BooleanDef from '../../components/Dictionary/en/BooleanDef'
import Expression from '../../components/Dictionary/en/Expression'
import Input from '../../components/Dictionary/en/Input'
import Interpreter from '../../components/Dictionary/en/Interpreter'
import JS from '../../components/Dictionary/en/JS'
import Operator from '../../components/Dictionary/en/Operator'
import Output from '../../components/Dictionary/en/Output'
import StringDef from '../../components/Dictionary/en/StringDef'
import Variable from '../../components/Dictionary/en/Variable'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { primitives, primitivesList } from '../../styles/coding/primitives.module.scss'
import { Helmet } from 'react-helmet'

const Primitives = () => (
  <div className={primitives}>
    <Helmet>
      <title>📊 Data Types</title>
      <meta name="description" content="Learn about the different types of data in JavaScript" />
    </Helmet>
    <h2>#3.1 📊 Basic Data Types</h2>
    <br />
    <span className="introCard">
      <YTVideo url="_4TPlwwHM8Q" thumbnail="/images/blender-horror.jpg" />
      <span>
        You can read more{' '}
        <a target="_blank" href="https://www.aleksandrhovhannisyan.com/blog/binary-for-beginners/">
          here
        </a>{' '}
        if you'd like a more in-depth explanation about how binary values are converted into more
        complex data types.
      </span>
    </span>
    <br />
    <p>
      In this section we will upgrade from working with just <BooleanDef /> logic to writing working
      JavaScript! Primitives are the basic kinds of data in JavaScript. Here are the basic
      primitives:
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
      Now I will explain each type of data and their <Operator>operators</Operator>, then in the
      next page I will show more examples of how they can be used together. Also, you can edit the{' '}
      <Input /> of all the code examples below. If your syntax is invalid (this means there is an
      error in your coding grammar) you will receive an error instead the <Output /> you expected
      because the <Interpreter>JS interpreter</Interpreter> will become confused. Computers are
      giant sticklers about their grammer, if there is a mistake in your code it will probably not
      run.
      <br />
      <br />
      The left side of the editor is the code we give to the <Interpreter />, and the right side is
      the output it gives us. We are currently in the "<Expression>Expression</Expression>{' '}
      Evaluator" mode, meaning that it will take whatever our code is on the left side and reduce it
      to a single value on the right side.
    </p>
    <div className="type boolean">
      <h2>Booleans</h2>
      <p>
        JavaScript has built in support for <BooleanDef>booleans</BooleanDef>.
      </p>
      <CodeSandbox value="true" className="mini" />
      <CodeSandbox value="false" className="mini" />
      <h3>Or Operations</h3>
      <p>
        The or <Operator /> is written as "||" in JavaScript, and it is used to compare two{' '}
        <BooleanDef>booleans</BooleanDef>. It returns true if either of the{' '}
        <BooleanDef>booleans</BooleanDef> beside it are true, otherwise it returns false.
      </p>
      <CodeSandbox value="true || false" className="mini" />
      <CodeSandbox value="false || true" className="mini" />
      <CodeSandbox value="false || false" className="mini" />
      <h3>Not Operations</h3>
      <p>
        The not <Operator /> is written as "!" in JavaScript, and it returns the opposite.
      </p>
      <CodeSandbox value="!true" className="mini" />
      <CodeSandbox value="!false" className="mini" />
      <h3>And Operations</h3>
      <p>
        The and <Operator /> is written as "&&" in JavaScript. It returns true if both of the{' '}
        <BooleanDef>booleans</BooleanDef> next to it are true, otherwise it returns false.
      </p>
      <CodeSandbox value="true && true" className="mini" />
      <CodeSandbox value="true && false" className="mini" />
      <CodeSandbox value="false && false" className="mini" />
    </div>
    <div className="type numbers">
      <h2>Numbers</h2>
      <p>
        Numbers can be integers (whole numbers like 33) or floats (meaning decimals like 45.512).
        Some basic operations are adding, multiplication, division, and subtraction. Besides
        changing the numbers you can also compare them (using symbols like &gt;, &lt;, or ≥) in
        order to <Output /> <BooleanDef /> values.
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
      <CodeSandbox value={"'What does the fox say?'"} className="mini" />
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
      Next: #3.2 Essential Tools
    </Link>
  </div>
)

export default Primitives
