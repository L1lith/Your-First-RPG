import RPG from '../components/Dictionary/es/RPG'
import Link from '../components/TranslatedLink'
import YTVideo from '../components/YTVideo'
import { home, extra } from '../styles/index.module.scss'

const Home = () => (
  <div className={home}>
    <h1 className="title">Tu Primer Juego RPG</h1>
    <p>
      En este curso explicaré los conceptos básicos de la codificación en JavaScript. Harás tu
      propio juego <RPG /> basado en texto que podrás compartir con tus amigos 😃 Espero poder hacer
      que aprender a codificar sea simple para ti.
    </p>
    <h2>Sections</h2>
    <ol className="toc sections">
      <li>
        <Link to="/vision">👀 Visualización de modelos lógicos</Link>
      </li>
      <li>
        <Link to="/toying">👐 Jugando con modelos lógicos</Link>
      </li>
      <li>
        <Link to="/coding">💻 Aprendiendo a codificar</Link>
      </li>
      <li>
        <Link to="/rpg">🎮 Construyendo un juego RPG</Link>
      </li>
    </ol>
    <Link to="/resources">Recuerde consultar la sección de recursos si se queda atascado</Link>
    <div className={extra}>
      <h2>¿Miedo a la codificación? ¡No lo seas!</h2>
      Echa un vistazo a esta inspiradora charla de Linda Liukas
      <YTVideo
        url="-jRREn6ifEQ"
        query={{ cc_lang_pref: 'es', cc_load_policy: '1' }}
        thumbnail="/images/poetry-of-programming.jpg"
      />
    </div>
  </div>
)

export default Home
