import Link from 'next/link'
import './index.scss'
import CodeSandbox from '../../components/CodeSandbox'

export default () => (
  <div className="basic-programs">
    <h1 className="title">#3.2 Building Basic Programs</h1>
    <br />
    <span className="intro-card">
      <div className="youtube-container">
        <iframe
          src="https://www.youtube.com/embed/fR-A3BNTUN4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        />
      </div>
      <br />
      How do you swallow a coding lesson? One byte at a time
    </span>
    <p>
      You might have a lot of information in your head from the last section, so do your best to
      connect that information with the upcoming tasks. In this section we will be using our
      primitive data types to build logic models in JavaScript :) Once you finish this section you
      will know basic coding!
      <br />
      <br />
      How is JS (JavaScript) code written?
    </p>
    <div className="user-sandbox">
      <h2>Sandbox</h2>
      <p>
        This is an extra editor you can use in case you have work going on in the editors and need
        an empty space to code.
      </p>
      <CodeSandbox />
    </div>
    <div className="variables">
      <h2>Variables</h2>
    </div>
    <div className="functions">
      <h2>Functions</h2>
      <p>
        Functions let you section off individual logic models that serve as a utility. Functions
        have a name, a set of inputs, a code section, and an output. You can re-use your function
        multiple times with different inputs. Below I will detail some example functions so you can
        see how they are written.
      </p>
      <h2>Addition Function</h2>
      <p>
        While this function is mostly redundant, you could easily make a function to add two numbers
        together.
      </p>
      <CodeSandbox value={'function add(a, b){\n    return a + b\n}'} className="short" />
      <p>
        The output is undefined because we made a <span className="bold">declaration</span> instead
        of a <span className="bold">statement</span>.{' '}
      </p>
    </div>
    <Link href="/coding">
      <a className="next">Up next: Fill this in</a>
    </Link>
  </div>
)
