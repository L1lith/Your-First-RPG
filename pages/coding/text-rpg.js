import Link from 'next/link'
import CodeSandbox from '../../components/CodeSandbox'
import { NextSeo } from 'next-seo'

export default () => (
  <div className="logic-models">
    <NextSeo title="#3.3 Text RPG Tutorial ⚔️" />
    <h2>#3.3 Text RPG Tutorial ⚔️</h2>
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
      we must learn a few more features.
    </p>
    <div className="comments">
      <h2>Comments</h2>
      <p>
        Comments allow us to write things in our code that is purely for notation (like writing
        notes in your math). Anything in the same line that comes after "//" will not be treated as
        part of the code
      </p>
      <CodeSandbox
        value={
          "alert('aesop rock is awesome') // This part doesn't have to be valid JavaScript code"
        }
        consoleMode
        disableAutoRun
      />
    </div>
    <div className="js-io">
      <h2>Basic Website Input/Output</h2>
      <p>
        While modifying the content of a webpage (done via HTML) is outside of the scope of this
        project, we can still communicate with the user from inside JavaScript! We can do this using
        the prompt and alert functions. I've disabled auto-running so it won't spam you with
        prompts, but from now on you must manually run the code. Try running the examples below:
      </p>
      <h3>Output: Alert</h3>
      <CodeSandbox value="alert('Your princess is in another castle')" consoleMode disableAutoRun />
      <h3>Input: Prompt</h3>
      <p>We can ask a user for input and save it to a variable to use it later</p>
      <CodeSandbox
        value={
          "var user = prompt('What is your name?')\nalert('Wishing ' + user + ' good fortune 💰')"
        }
        consoleMode
        disableAutoRun
      />
      <p>
        Note: In normal web development the use of the alert and prompt functions is discouraged.
        This is because creating dialogue inside of the page (using HTML) rather than inside of the
        browsers pop-up boxes is less jarring.
      </p>
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
        have an example of doing something based on the user's input
      </p>
      <CodeSandbox
        value={
          '// Notice that any spaces or uppercases will cause the equality to fail, so "YES" will give the wrong result\nif(prompt("Do you like oatmeal raisin cookies?") === "yes") { \n    alert("You have good taste in 🍪")\n} else { // They entered anything besides exactly "yes"\n    alert("Maybe 🍪 just aren\'t your thing?")\n}'
        }
        consoleMode
        disableAutoRun
      />
      <p>We can also chain multiple ifs together to have multiple outcomes</p>

      <CodeSandbox
        value={
          'var favoriteCookie = prompt("What\'s your favorite kind of cookie?")\nif(favoriteCookie === "oatmeal" || favoriteCookie === "oatmeal raisin") { \n    alert("You have good taste in 🍪")\n} else if (favoriteCookie === "chocolate chip") {\n    alert("Chocolate chip is the second best cookie so that\'s understandable")\n} else {\n    alert("Maybe 🍪 just aren\'t your thing?")\n}'
        }
        consoleMode
        disableAutoRun
      />
      <h3>while</h3>
      <p>
        You can use the while loop to keep doing something until the boolean expression returns
        false. Look here how we can repeatedly ask the user for their name until they return a valid
        name (if a name is missing it is invalid, if the user exits the prompt the prompt it returns
        null so we must retry).
      </p>
      <CodeSandbox
        disableAutoRun
        consoleMode
        value={
          'var name\nwhile(!name) {\n    name = prompt("What is your name adventurer?")\n}\nalert("You wake up on a strange beach. \'" + name + "\' is written on the inside of your shirt.")'
        }
      />
    </div>
    <div>
      <h2>Better text Handling</h2>
      <p>
        I've created this function to help you ensure you receive valid input. Strings provide
        .trim(...) function to remove all spaces from the beginning and end. Here we check that the
        trimmed string is at least 1 character long (meaning that there's at least 1 non-space
        character). Then we return the trimmed string as we probably don't care about them and it
        can make it harder to match strings later (for example "yes " === "yes" will return false,
        but if we trim the text we don't have this problem)
      </p>
      <CodeSandbox
        disableAutoRun
        consoleMode
        value={`function smartPrompt(question) {
    var output = null
    while(output === null || output.trim().length < 1) {
        output = prompt(question)
    }
    return output.trim()
}

var name = smartPrompt("What is your name adventurer?")

alert("You wake up on a strange beach. '" + name + "' is written on the inside of your shirt.")`}
      />
      <p>
        Here we combine the .toLowerCase function (it's available to all strings) and our
        smartPrompt function. Notice how when we run it it still recognizes a yes input even if it
        has whitespace around it or isn't lowercase.
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
    <Link href="/coding/rpg-publishing">
      <a className="next">Up next: Publishing your RPG</a>
    </Link>
  </div>
)
