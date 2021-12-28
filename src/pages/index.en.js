import { Link } from 'gatsby'
import YTVideo from '../components/YTVideo'
import { home, extra, enticement } from '../styles/index.module.scss'
import RPG from '../components/Dictionary/RPG'

const Home = () => (
  <div className={home}>
    <h1 className="title">Your First RPG</h1>
    <p>
      In this course I will explain the basics of coding in JavaScript. You will make your own text
      based <RPG /> game that you can share with your friends 😃 I hope that I can make learning to
      code simple for you.
    </p>
    <h2>Sections</h2>
    <ol className="toc sections">
      <li>
        <Link href="/vision">
          <a>👀 Visualizing Logic Models</a>
        </Link>
      </li>
      <li>
        <Link href="/toying">
          <a>👐 Toying with Logic Models</a>
        </Link>
      </li>
      <li>
        <Link href="/coding">
          <a>💻 Learning to Code</a>
        </Link>
      </li>
      <li>
        <Link href="/rpg">
          <a>🎮 Building an RPG</a>
        </Link>
      </li>
    </ol>
    <Link href="/resources">
      <a>Remember to check out the resource section if you get stuck</a>
    </Link>
    <div className={extra}>
      <h2>Scared of Coding? Don't be!</h2>
      Check out this inspiring talk by Linda Liukas
      <YTVideo url="-jRREn6ifEQ" thumbnail="/images/poetry-of-programming.jpg" />
    </div>
  </div>
)

export default Home
