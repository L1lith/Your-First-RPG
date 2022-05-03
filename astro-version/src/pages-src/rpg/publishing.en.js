import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function Publishing() {
  return (
    <>
      <Helmet>
        <title>🏆 Sharing your RPG</title>
        <meta name="description" content="How to share your RPG game" />
      </Helmet>
      <h2>#4.2 🏆 Sharing your RPG</h2>
      <br />
      <div className="introCard">
        <YTVideo url="_nuS86ITjIM" thumbnail="/images/sanctuary-rpg.jpg" />
        Your imagination is your limit
      </div>
      <p>
        Congratulations, that you've learned basic JavaScript you're ready to make your own game! To
        begin work open the{' '}
        <Link className="to-editor" to="/rpg/editor">
          Game Editor
        </Link>
        . Make sure to save your URL so you don't lose your game forever! You can share the URL with
        your friends and they can play your game!
        <br />
        <br />
        Made a cool RPG? Submit a request to have your game featured on this webpage{' '}
        <a
          target="_blank"
          className="bold"
          href="https://github.com/L1lith/Your-First-RPG/issues/new?assignees=&labels=rpg+display&template=display-your-project-on-the-site.md">
          here
        </a>{' '}
        😊
      </p>
      <Link className="next" to="/rpg/editor">
        #4.3 🛠️ The Game Editor
      </Link>
    </>
  )
}
