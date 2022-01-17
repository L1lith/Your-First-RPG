import RPG from '../components/Dictionary/es/RPG'
import Link from '../components/TranslatedLink'
import YTVideo from '../components/YTVideo'
import { home, extra, small, title } from '../styles/index.module.scss'
import { Helmet } from 'react-helmet'

const Home = () => (
  <div className={home}>
    <Helmet>
      <title>Tu Primer Juego RPG</title>
      <meta
        name="description"
        content="¡Aprende a crear tu propio juego de aventuras en línea y compártelo con tus amigos!"
      />
    </Helmet>
    <h1 className={title}>
      <span className={small}>Introducción a la codificación:</span>
      <br /> Tu Primer Juego RPG
    </h1>
    <h2>¿Que aprenderás?</h2>
    <p>
      En este curso explicaré los conceptos básicos de la codificación en JavaScript. Harás tu
      propio juego <RPG /> basado en texto que podrás compartir con tus amigos 😃 Espero poder hacer
      que aprender a codificar sea simple para ti.
    </p>
    <h2>¿Por qué este curso?</h2>
    <p>
      Diseñé este curso para que sea fácil de entender y fácil de comenzar. no necesitas para
      instalar cualquier cosa, y funciona en dispositivos móviles y ordenadores más baratos. yo
      también he usado juegos y videos para que sea una experiencia más atractiva e interactiva.
    </p>
    <h2>Secciones</h2>
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
        <Link to="/rpg">🎮 Construyendo un juego!</Link>
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
