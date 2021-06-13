import './resources.scss'

export default () => (
  <div id="resources" className="resources">
    <h2>Resources</h2>
    This course focuses on being palatable for beginners, so if you'd like to learn about JavaScript
    in more depth, or you have questions I recommend the following resources:
    <ul className="resource-list">
      <li>
        Daniel Shiffman makes hilarious & creative YouTube videos on his channel{' '}
        <a className="bold" href="https://www.youtube.com/c/TheCodingTrain/featured">
          The Coding Train
        </a>
        . He teaches all kinds of things including web development, 2D game development, and more.
        I'd highly recommend him if you're looking for an engaging way to learn more about coding.
      </li>
      <li>
        <a
          href="
  https://stackoverflow.com/">
          StackOverflow
        </a>{' '}
        is a little like the yahoo answers of the programming world (but please don't spam silly
        questions). If you have an issue chances are someones had the exact same one before. If
        you're stuck and can't figure something out search on there,{' '}
        <span className="bold">google it</span>, and if you still can't find the answer feel free to
        open a new question.
      </li>
      <li>
        <a href="https://javascript.info">JavaScript.info</a> is a great resource JS concepts in
        greater detail.
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN</a> is the most
        extensive site for learning about web technologies. It is maintained by the Mozilla
        foundation, but it can be overly technical or lacking information in certain areas.
      </li>
      <li>
        If you get stuck and you've exhausted your other options, you can ask for help{' '}
        <a href="https://github.com/L1lith/Intro-Coding-Concepts/issues/new?assignees=&labels=help+request&template=help-request.md">
          here
        </a>
        . Please be considerate and don't spam the issue section, and check first if someone's asked
        that question before or if it's already covered in the docs.
      </li>
    </ul>
  </div>
)