import { resources, resourceList } from '../styles/resources.module.scss'

export default function Resources() {
  return (
    <div className={resources}>
      <h2>Resources</h2>
      This course focuses on being palatable for beginners, so if you'd like to learn about
      JavaScript in more depth, or you have questions I recommend the following resources:
      <table className={resourceList}>
        <thead>
          <tr>
            <th>Title/Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                target="_blank"
                className="bold"
                href="https://www.youtube.com/c/TheCodingTrain/featured"
              >
                The Coding Train (YouTube Channel)
              </a>
            </td>
            <td>
              Daniel Schiffman teaches all kinds of things including web development, 2D game
              development, and more. I'd highly recommend him if you're looking for an engaging way
              to learn more about coding.
            </td>
          </tr>
          <tr>
            <td>
              <a
                target="_blank"
                href="
  https://stackoverflow.com/"
              >
                StackOverflow (Questions & Answers)
              </a>
            </td>
            <td>
              StackOverflow is a little like the yahoo answers of the coding world (but please don't
              spam silly questions). If you have an issue chances are someones had the exact same
              one before. If you're stuck and can't figure something out search on there,{' '}
              <span className="bold">google it</span>, and if you still can't find the answer feel
              free to open a new question.
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://javascript.info">
                JavaScript.info (Glossary)
              </a>
            </td>
            <td>
              JavaScript.info is a great resource to get clarification on specific JS concepts
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                Mozilla Developer Network (Glossary)
              </a>
            </td>
            <td>
              The MDN is the most extensive site for learning about web technologies. It is
              maintained by the Mozilla foundation, but it can be overly technical or lacking
              information in certain areas
            </td>
          </tr>
          <tr>
            <td>
              <a
                target="_blank"
                href="https://github.com/L1lith/Your-First-RPG/issues/new?assignees=&labels=help+request&template=help-request.md"
              >
                YourFirstRPG Support (GitHub Issue Tracker)
              </a>
            </td>
            <td>
              If you get stuck and you've exhausted your other options, you can ask for help here.
              Please be considerate and don't spam the issue section, and check first if someone's
              asked that question before.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
