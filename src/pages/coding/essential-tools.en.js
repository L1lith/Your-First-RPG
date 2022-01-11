import CodeSandbox from '../../components/CodeSandbox'
import Expression from '../../components/Dictionary/en/Expression'
import FunctionDef from '../../components/Dictionary/en/FunctionDef'
import Input from '../../components/Dictionary/en/Input'
import Interpreter from '../../components/Dictionary/en/Interpreter'
import Output from '../../components/Dictionary/en/Output'
import Variable from '../../components/Dictionary/en/Variable'
import ShittyChecking from '../../components/ShittyChecking'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function EssentialTools() {
  return (
    <div>
      <Helmet>
        <title>🔨 Essential Tools</title>
      </Helmet>
      <h1>#3.2 🔨 Essential Tools</h1>
      <span className="introCard">
        <YTVideo url="himmatLe7aQ" query={{ start: 32 }} thumbnail="/images/melinda-mae.jpg" />
        <span>How do you swallow a coding lesson? One byte at a time</span>
      </span>

      <p>
        You probably have a lot of information in your head from the last section, try to do your
        best to connect that information with the upcoming tasks. In this section we will be
        learning some tools 🔨 to help us build logic models in JavaScript more effectively. Once
        you finish this section you will know basic coding! If you feel overwhelmed consider taking
        a break.
        <br />
        <br />
        We will also be using terminal mode instead of the <Expression /> evaluator mode in our
        editors, so you'll be seeing some things that say "console.log(...)", and our program output
        will be whatever is inside the parenthesis (this is called a <FunctionDef />, there is more
        on this below).
      </p>
      <div>
        <h2>Variables</h2>
        <p>
          We can create <Variable>variables</Variable> in order to store (save) data values for
          later use. In a basic logic model where we only have <Input>inputs</Input> and{' '}
          <Output>outputs</Output>, so it becomes incredibly difficult to deal with data that
          persists (needs to be saved). Let's say you're writing a checking account app, but you're
          not allowed to save any data. The user might see a notification saying "You just spent
          $10.52", and yet every time they open the app they're greeted with this:
          <br />
          <span className="bold">(try using the app below)</span>
        </p>

        <ShittyChecking />

        <p>
          This would be so annoying! Instead of doing this we store <Variable>variables</Variable>{' '}
          in our memory (or in this case the computer's memory) by giving them names, and then we
          can retrieve or modify them later when we need them.
          <br />
          <br />
          Here we name a <Variable /> called balance (note we do not give it any value yet so it
          defaults to undefined)
        </p>
        <CodeSandbox className="mini" value={'var balance\nconsole.log(balance)'} consoleMode />
        <p>
          We can set a value by using the assignment operator "=" and putting the value we want
          after it, and once we have done this we can see our <Variable /> has a value now :)
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
          <FunctionDef>Functions</FunctionDef> let you make re-usable pieces of code that serve as a
          tool (like a blueprint of how to do something). <FunctionDef>Functions</FunctionDef> have
          a name, a set of <Input>inputs</Input>, a code section, and an <Output>output</Output> (we
          use "return" to specify the output). <FunctionDef>Functions</FunctionDef> can save you a
          lot of time because you can re-use your function multiple times with different inputs,
          rather than having to write that piece of code over and over.{' '}
          <FunctionDef>Functions</FunctionDef> use parenthesis to create their inputs, and brackets
          (they look like this {'{}'}). After we've created our <FunctionDef /> we use parenthesis
          again to call it (calling a <FunctionDef /> means to run it) The "console.log" part of our
          code is an example of a function (in this case to <Output /> some data). This{' '}
          <FunctionDef /> doesn't have to be created by us because it's given to us automatically by
          the <Interpreter>JS interpreter</Interpreter>. It's called (to call a <FunctionDef />{' '}
          means to run it) with parenthesis and it can do different things depending on what the{' '}
          <Input /> we put inside it is (which in the previous example was the balance{' '}
          <Variable>variable's</Variable> current value).
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
