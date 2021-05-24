import Link from 'next/link'
import CodeSandbox from '../../components/CodeSandbox'
import './primitives.scss'

export default () => (
  <div className="primitives">
    <h2>#3.1 Coding with Primitives</h2>
    <br />
    <span className="intro-card">
      <img src="/static/images/decimalStatue.jpg" type="img/jpg" />
      <span>
        You can read more{' '}
        <a href="https://www.aleksandrhovhannisyan.com/blog/binary-for-beginners/">here</a> if you'd
        like to learn about how binary values are converted into more complex data types like
        strings and numbers.
      </span>
    </span>
    <br />
    <p>
      In this section we will upgrade from working with just boolean logic to writing functional
      JavaScript! Primitives are the basic data types in JavaScript. Here are the basic primitives:
    </p>
    <ul className="primitives-list">
      <li>Boolean</li>
      <li>Number</li>
      <li>String</li>
      <li>undefined</li>
      <li>null</li>
    </ul>
    <p>
      I will now detail each type of data and their operators, then in the next page I will provide
      some more examples of how they can be used together. Additionally, you can edit the input of
      all the code examples below (note: if your syntax is invalid you will receive an error instead
      of your output)
    </p>
    <div className="type boolean">
      <h2>Booleans</h2>
      <p>JavaScript has integrated support for boolean values and boolean operations.</p>
      <CodeSandbox value="true" className="short" />
      <CodeSandbox value="false" className="short" />
      <h3>Or Operations</h3>
      <p>The or operator is written as "||" in JavaScript</p>
      <CodeSandbox value="true || false" className="short" />
      <CodeSandbox value="false || true" className="short" />
      <CodeSandbox value="false || false" className="short" />
      <h3>Not Operations</h3>
      <p>The not operator is written as "!" in JavaScript</p>
      <CodeSandbox value="!true" className="short" />
      <CodeSandbox value="!false" className="short" />
      <h3>And Operations</h3>
      <p>The and operator is written as "&&" in JavaScript</p>
      <CodeSandbox value="true && true" className="short" />
      <CodeSandbox value="true && false" className="short" />
      <CodeSandbox value="false && false" className="short" />
    </div>
    <div className="type numbers">
      <h2>Numbers</h2>
      <p>
        Numbers can be integers (whole numbers like 33) or floats (short for floating point decimals
        like 45.512). Some basic operations are adding, multiplication, division, and subtraction.
        Besides changing the numbers you can also compare them (using symbols like &gt;, &lt;, or ≥)
        in order to output boolean values.
      </p>
      <h3>Addition/Subtraction</h3>
      <CodeSandbox value="12 + 12" className="short" />
      <CodeSandbox value="30 - 12" className="short" />
      <h3>Greater than/Less than</h3>
      <p>The greater than and less than operators return boolean values</p>
      <CodeSandbox value="12 > 10" className="short" />
      <CodeSandbox value="12 < 10" className="short" />
      <CodeSandbox value="5 >= 5" className="short" />
      <CodeSandbox value="6 <= 5" className="short" />
      <h3>Multiply/Divide</h3>
      <CodeSandbox value="32 * 11" className="short" />
      <CodeSandbox value="4 / 12" className="short" />
    </div>
    <div className="type strings">
      <h2>Strings</h2>
      <p>
        Strings are collections of text (like someones name, an address, etc). They are written by
        surrounding the text in single or double quotes.
      </p>
      <CodeSandbox value={'"I like chocolate milk"'} className="short" />
      <CodeSandbox value={"'my namea borat'"} className="short" />
      <p>They can also be added together</p>
      <CodeSandbox value={"'beep' + 'bop'"} className="short" />
      <CodeSandbox value={"'9' + '10'"} className="short" />
    </div>
    <div className="type undefined">
      <h2>undefined</h2>
      <p>
        The value undefined is used to represent a value that has not been assigned anything else.
        It's basically the universal placeholder value.
      </p>
      <CodeSandbox value="undefined" className="short" />
    </div>
    <div className="type null">
      <h2>null</h2>
      <p>
        The value null is used to represent the value "nothing". It's different from undefined in
        that it is intentionally nothing rather than just being missing a value.
      </p>
      <CodeSandbox value="null" className="short" />
    </div>
    <p>
      In the next section we'll be using these primitive values so you can see a little bit more why
      they are useful.
    </p>
    <Link href="/coding/basic-programs">
      <a className="next">Up next: Building Basic Programs</a>
    </Link>
  </div>
)
