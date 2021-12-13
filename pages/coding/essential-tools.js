import Link from 'next/link'
import CodeSandbox from '../../components/CodeSandbox'
import { Component } from 'react'
import { NextSeo } from 'next-seo'
import YTVideo from '../../components/YTVideo'
import ShittyChecking from '../../components/ShittyChecking'

export default () => (
  <div>
    <NextSeo title="🔨 Essential Tools" />
    <h1>#3.2 🔨 Essential Tools</h1>
    <span>
      <YTVideo url="himmatLe7aQ" query={{ start: 32 }} thumbnail="/images/melinda-mae.jpg" />
      How do you swallow a coding lesson? One byte at a time
    </span>
    <p>
      You probably have a lot of information in your head from the last section, try to do your best
      to connect that information with the upcoming tasks. In this section we will be learning some
      tools 🔨 to help us build logic models in JavaScript more effectively. Once you finish this
      section you will know basic coding! If you feel overwhelmed consider taking a break.
      <br />
      <br />
      We will also be using something called "console output" in our editors, so you'll be seeing
      some things that say "console.log(...)", and our program output will be whatever is inside the
      parenthesis.
    </p>
    <div>
      <h2>Variables</h2>
      <p>
        We can create variables in order to store (save) data values for later use. In a basic logic
        model where we only have inputs and outputs it becomes incredibly difficult to deal with
        data that persists (needs to be saved). Let's say you're writing a checking account app, but
        you're not allowed to save any data. The user might see a notification saying "You just
        spent $10.52", and yet every time they open the app they're greeted with this (try using the
        app)
      </p>

      <ShittyChecking />

      <p>
        This would be so annoying! Instead of doing this we store variables in our memory (or in
        this case the computer's memory) by names, and then retrieve or modify them later.
        <br />
        <br />
        Here we name a variable called balance (note we do not give it any value yet so it defaults
        to undefined)
      </p>
      <CodeSandbox className="mini" value={'var balance\nconsole.log(balance)'} consoleMode />
      <p>
        We can set a value using the assignment operator "=" and providing a value after it, and
        once we have done this we can see our variable has a value now :)
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
        Functions let you make re-usable pieces of code that serve as a tool (like a blueprint of
        how to do something). Functions have a name, a set of inputs, a code section, and an output
        (we use "return" to specify the output). Functions can save you a lot of time because you
        can re-use your function multiple times with different inputs, rather than having to write
        that piece of code over and over. Functions use parenthesis to create their inputs, and
        brackets (they look like this {'{}'}). After we've create our function we use parenthesis
        again to call it (calling a function means to run it). The "console.log" part of our code is
        an example of a function (in this case to output some data). This function doesn't have to
        be created by us because it's given to us automatically by the JS interpreter. It's called
        (to call a function means to run it) with parenthesis and it can different things depending
        on what the input is (which in the previous example was the balance variable's current
        value).
      </p>
      <h2>Addition Function</h2>
      <p>
        While this function is mostly redundant, you could easily make a function to add two numbers
        together.
      </p>
      <CodeSandbox
        consoleMode
        value={'function add(a, b){\n    return a + b\n}'}
        className="short"
      />
      <p>The output is empty because we didn't log anything to the console.</p>
    </div>
    <div className="console">
      <h2>More about the Console</h2>
      On the previous page I was using the "JavaScript Expression Evaluator". On the right you would
      see what output of the JS interpreter evaluating the code on the left side. Normally when
      we're coding we are running our code from a terminal, and we see the output of the console.log
      function in real-time instead of seeing the output of the JS evaluation. We only need to
      output things to console.log when we as the developer (or coder) want to know what their
      values are, that way our output doesn't get super cluttered.
    </div>
    <CodeSandbox
      consoleMode
      value={'function add(a, b){\n    return a + b\n}\nconsole.log(add(14, 16))'}
      className="short"
    />
    <div className="parenthesis">
      <h2>Parenthesis</h2>
      Not only can you use parenthesis to change the ordering of math expressions, but you can also
      use parenthesis to change the ordering of any other kind of expression. Here are some example
      of changing the order of code evaluation using parenthesis for math and non-math purposes.
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
    {
      null /*<div className="user-sandbox">
      <h2>Sandbox</h2>
      <p>
        This is an extra editor you can use in case you have work going on in the editors and need
        an empty space to code.
      </p>
      <CodeSandbox />
</div>*/
    }
    <Link href="/rpg">
      <a className="next">Next: #4.0 Building your Text RPG</a>
    </Link>
  </div>
)
