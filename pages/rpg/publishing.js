import LevelOne from '../../components/BooleanGame/levels/LevelOne'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import YTVideo from '../../components/YTVideo'

export default () => (
  <div className="publishing">
    <NextSeo title={'🏆 Sharing your RPG'} />
    <h2>#4.2 🏆 Sharing your RPG</h2>
    <br />
    <div className="intro-card">
      <YTVideo url="_nuS86ITjIM" />
      Your imagination is your limit
    </div>
    <p>
      Congratulations, that you've learned basic JavaScript you're ready to make your own game! To
      begin work open the{' '}
      <Link href="/rpg/editor">
        <a className="to-editor">Game Editor</a>
      </Link>
      . Make sure to save your URL so you don't lose your game forever! You can share the URL with
      your friends and they can play your game!
      <br />
      <br />
      Made a cool RPG? Submit a request to have your game featured on this website{' '}
      <a
        className="bold"
        href="https://github.com/L1lith/Your-First-RPG/issues/new?assignees=&labels=rpg+display&template=display-your-project-on-the-site.md">
        here
      </a>{' '}
      😊
      <br />
      <br />
      If you'd like to learn more about JavaScript, or you'd like to support me, continue on to the
      next page.
    </p>
    <Link href="/rpg/summary">
      <a className="next">#4.3 🛠️ The Game Editor</a>
    </Link>
  </div>
)
