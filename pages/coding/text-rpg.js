import Link from 'next/link'
import CodeSandbox from '../../components/CodeSandbox'

export default () => (
  <div className="logic-models">
    <h2>#3.3 Your first RPG ⚔️</h2>
    <span className="intro-card">
      <div className="youtube-container">
        <iframe
          src="https://www.youtube.com/embed/7yeA7a0uS3A?start=29"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      Half-dragon half-tiger sold separately
    </span>
    <p>
      Now that we've laid out the basics, let's apply ourselves and have some fun 😊 To complete
      your introduction to coding you will build your own text-based RPG. Before we do that though
      we must learn a few more features, then we can get started.
    </p>
    <div className="js-io">
      <h2>Basic Website Input/Output</h2>
      <p>
        While modifying the content of a webpage (done via HTML) is outside of the scope of this
        project, we can still communicate with the user from inside JavaScript! We can do this using
        the prompt and alert functions. I've disabled auto-running so it won't spam you with
        prompts, but from now on you must manually run the code. Try running the examples below:
      </p>
      <h3>Output: Alert</h3>
      <CodeSandbox
        readOnly
        value="alert('Your princess is in another castle')"
        consoleMode
        disableAutoRun
      />
      <h3>Input: Prompt</h3>
      <p>We can ask a user for input and save it to a variable to use it later</p>
      <CodeSandbox
        readOnly
        value={
          "var user = prompt('What is your name?')\nalert('Wishing ' + user + ' good fortune 💰')"
        }
        consoleMode
        disableAutoRun
      />
    </div>
    <div className="flow-control">
      <h2>Flow Control</h2>
      <p>
        Flow control allows us to establish branching choices in our logic model using boolean
        logic. You might say something along the lines of "if x is true then do y, or else do z". It
        allows us to create flexible code that chooses the appropriate path to take in order to
        properly complete the task. You can read more about flow control{' '}
        <a href="https://exploringjs.com/impatient-js/ch_control-flow.html">here.</a>
      </p>
      <h3>if/else</h3>
      <p>
        You can use combinations of if and else to make powerful decision making models. Here we
        have an example of doing something
      </p>
    </div>
  </div>
)
