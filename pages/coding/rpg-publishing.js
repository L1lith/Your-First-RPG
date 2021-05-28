import LevelOne from '../../components/BooleanGame/levels/LevelOne'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default () => (
  <div className="level-1">
    <NextSeo title={'#3.4 Publishing your RPG'} />
    <h2>#3.4 Publishing your RPG</h2>
    <br />
    <div className="intro-card">
      <div className="youtube-container">
        <iframe
          src="https://www.youtube.com/embed/_nuS86ITjIM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      Your imagination is your limit
    </div>
    <p>
      Congratulations, that you've learned basic JavaScript you're ready to make your own game! To
      begin work open my template project{' '}
      <a href="https://jseditor.io/?key=e7643a5fbde711eb877e00224d6bfcd5-ver-4">here</a>. To edit
      the game open the JavaScript tab, and then you can press run to try it out. Once you save your
      changes you can share the URL with your friends and they can play your game! I would also
      recommending logging in to keep track of your game but it is not required.
      <br />
      <br />
      Made a cool RPG? Submit a request to have your game featured on this website{' '}
      <a
        className="bold"
        href="https://github.com/L1lith/Intro-Coding-Concepts/issues/new?assignees=&labels=rpg+display&template=display-your-project-on-the-site.md">
        here
      </a>{' '}
      😊
      <br />
      <br />
      If you'd like to learn more about JavaScript, or you'd like to support me, continue on to the
      next page.
    </p>
    <Link href="/coding/summary">
      <a className="next">Up next: #3.5 Summary & Further Reading</a>
    </Link>
  </div>
)
