import LevelTwoGame from '../../components/BooleanGame/levels/LevelTwo'
import Operator from '../../components/Dictionary/es/Operator'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function LevelTwo() {
  return (
    <div className="level-2">
      <Helmet>
        <title>🚫 Lo que es "NOT" permitido</title>
      </Helmet>
      <h2>#2.2 🚫 Lo que es "NOT" permitido</h2>
      <br />
      <span className="introCard">
        <YTVideo url="fhIdbRp6xeg" thumbnail="/images/borat-not-joke.jpg" />
      </span>
      <br />
      <h2>La operadora "not"</h2>
      <p>
        Ahora que hemos aprendido el <Operator /> OR más básico, es hora de pasar a NOT. El{' '}
        <Operator /> NOT devuelve falso cuando su entrada es verdadera y verdadero cuando su entrada
        es falsa. Puede pensar en esto como una inversión (inversión que significa que devuelve lo
        contrario).
      </p>
      <p>
        Cuando juegues en el segundo nivel, asegúrate de NO seleccionar ningún color o forma que
        tenga el prefijo "no".
      </p>
      <LevelTwoGame />
      <Link className="next" to="/toying/level-three">
        Siguiente: #2.3 💻 Booleans para aplicaciones de codificación
      </Link>
    </div>
  )
}
