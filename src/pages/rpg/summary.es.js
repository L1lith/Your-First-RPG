import LevelOne from '../../components/BooleanGame/levels/LevelOne'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { congratulations, dessert } from '../../styles/rpg/summary.module.scss'
import { Helmet } from 'react-helmet'

export default function Summary() {
  return (
    <div className="summary">
      <Helmet>
        <title>🔭 ¡Ganaste! Otras lecturas</title>
        <meta name="description" content="¡Felicitaciones por crear tu juego de rol!" />
      </Helmet>
      <h2>#4.4 🔭 ¡Ganaste! Otras lecturas</h2>
      <br />
      <div className="introCard">
        <YTVideo
          url="videoseries"
          query={{
            list: 'PLRqwX-V7Uu6ZYJC7L-r6rX6utt6wwJCyi',
            cc_lang_pref: 'es',
            cc_load_policy: '1'
          }}
          thumbnail="/images/dan-schiff.jpg"
        />
        Daniel Shiffman tiene tantos buenos videos
      </div>
      <p className={congratulations}>
        <span className={dessert}>🎂 🍰 🥧</span>
        Felicitaciones has terminado el curso.
      </p>
      <div className="stuck">
        <h2>Sintiéndose atascada?</h2>
        Consulte la <Link to="/resources">página de recursos aquí</Link> para encontrar ayuda.
      </div>
      <br />
      <div className="further-reading">
        <h2>Otras lecturas</h2>
        Muchas gracias por tomar mi curso, espero que hayas aprendido algo. Si desea que haga más
        cursos (como entrar en áreas de JavaScript más avanzadas, como sitios web interactivos y
        secuencias de comandos), considere apoyarme a continuación de forma gratuita :)
        <br />
        <br />
        Entonces, ¿a dónde voy desde aquí? Si desea codificar sitios web, puede leer más sobre eso{' '}
        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn">
          aquí
        </a>
        . JavaScript es un gran punto de entrada a muchas áreas diferentes, como bots de{' '}
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=7A-bnPlxj4k&list=PLRqwX-V7Uu6avBYxeBSwF48YhAnSn_sA4">
          discord bots
        </a>
        , secuencias de comandos de{' '}
        <a target="_blank" href="https://medium.com/edureka/learn-node-js-b3a9c6fb632c">
          Node.js
        </a>{' '}
        (Node.js es la forma en que ejecuta JavaScript sin un navegador, algo así como Python, y
        tiene muchas funciones geniales) y más. También he incluido una lista de recursos en la{' '}
        <Link to="/#resources">página de recursos</Link>.
        <br />
        <br />
        Si desea sugerir una mejora, puede abrir un ticket{' '}
        <a
          target="_blank"
          href="https://github.com/L1lith/Your-First-RPG/issues/new?assignees=&labels=enhancement&template=improvement-idea.md">
          aquí
        </a>{' '}
        o puede enviar una solicitud de extracción{' '}
        <a target="_blank" href="https://github.com/L1lith/Your-First-RPG/pulls">
          aquí
        </a>
        .
      </div>
      <Link className="next" to="/support">
        Considera apoyarme 💜
      </Link>
    </div>
  )
}
