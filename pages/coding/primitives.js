import Link from 'next/link'
import CodeSandbox from '../../components/CodeSandbox'
import './primitives.scss'
import { NextSeo } from 'next-seo'
import YTVideo from '../../components/YTVideo'

export default () => (
  <div className="primitives">
    <NextSeo title="#3.1 Basic Data Types 📊" />
    <h2>#3.1 Basic Data Types 📊</h2>
    <br />
    <span className="intro-card">
      <YTVideo url="_4TPlwwHM8Q" />
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
      <CodeSandbox value="true" className="mini" />
      <CodeSandbox value="false" className="mini" />
      <h3>Or Operations</h3>
      <p>The or operator is written as "||" in JavaScript</p>
      <CodeSandbox value="true || false" className="mini" />
      <CodeSandbox value="false || true" className="mini" />
      <CodeSandbox value="false || false" className="mini" />
      <h3>Not Operations</h3>
      <p>The not operator is written as "!" in JavaScript</p>
      <CodeSandbox value="!true" className="mini" />
      <CodeSandbox value="!false" className="mini" />
      <h3>And Operations</h3>
      <p>The and operator is written as "&&" in JavaScript</p>
      <CodeSandbox value="true && true" className="mini" />
      <CodeSandbox value="true && false" className="mini" />
      <CodeSandbox value="false && false" className="mini" />
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
      <CodeSandbox value="12 + 12" className="mini" />
      <CodeSandbox value="30 - 12" className="mini" />
      <h3>Greater than/Less than</h3>
      <p>The greater than and less than operators return boolean values</p>
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
        Strings are collections of text (like someones name, an address, etc). They are written by
        surrounding the text in single or double quotes.
      </p>
      <CodeSandbox value={'"I like chocolate milk"'} className="mini" />
      <CodeSandbox value={"'my namea borat'"} className="mini" />
      <p>They can also be added together</p>
      <CodeSandbox value={"'beep' + 'bop'"} className="mini" />
      <CodeSandbox value={"'9' + '10'"} className="mini" />
    </div>
    <div className="type undefined">
      <h2>undefined</h2>
      <p>
        The value undefined is used to represent a value that has not been assigned anything else.
        It's basically the universal placeholder value.
      </p>
      <CodeSandbox value="undefined" className="mini" />
    </div>
    <div className="type null">
      <h2>null</h2>
      <p>
        The value null is used to represent the value "nothing". It's different from undefined in
        that it is intentionally nothing rather than just being missing a value.
      </p>
      <CodeSandbox value="null" className="mini" />
    </div>
    <div className="equality">
      <h2>Equality</h2>
      <p>
        To check whether two values are the same we can use the strict equality operator "===". This
        will return true{' '}
      </p>
    </div>
    <br />
    <p>
      In the next section we'll be using these primitive values so you can see a little bit more why
      they are useful. You can read in greater detail about JS's data types{' '}
      <a href="https://javascript.info/types">here</a>
    </p>
    <Link href="/coding/essential-tools">
      <a className="next">Next: #3.2 Essential Tools</a>
    </Link>
  </div>
)
