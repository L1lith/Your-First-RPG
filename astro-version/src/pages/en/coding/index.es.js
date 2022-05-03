import Expression from '../../components/Dictionary/es/Expression'
import Interpreter from '../../components/Dictionary/es/Interpreter'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { Helmet } from 'react-helmet'

export default function CodingIntro() {
  return (
    <>
      <Helmet>
        <title>🛣️ Pasando a la codificación</title>
        <meta name="description" content="Una introducción a la codificación en JavaScript " />
      </Helmet>
      <h1 className="title">Capítulo 3</h1>
      <ol className="toc pages">
        <li>
          <Link to="/coding#lesson">#3.0 🛣️ Pasando a la codificación</Link>
        </li>
        <li>
          <Link to="/coding/primitives">#3.1 📊 Tipos de datos básicos</Link>
        </li>
        <li>
          <Link to="/coding/essential-tools">#3.2 🔨 Herramientas esenciales</Link>
        </li>
      </ol>
      <h2 id="lesson">#3.0 🛣️ Pasando a la codificación</h2>
      <br />
      <span className="introCard">
        <YTVideo url="O5IgvHdlGqo" thumbnail="/images/codificación-primera-vez.jpg" />
        (este video es una chiste)
      </span>

      <p>
        ¿Cómo se escribe el código JS (JavaScript)? El código JavaScript es solo una serie de{' '}
        <Expression>expressions</Expression> lógicas (como pequeños modelos lógicos) que ejecuta el{' '}
        <Interpreter>JavaScript Interpreter</Interpreter> en un orden particular. Cada línea se
        evalúa una a la vez de arriba a abajo y de izquierda a derecha como en espanol. El{' '}
        <Interpreter /> también comprende y aplica las reglas de PEMDAS. Cada línea de código que
        escriba debe combinarse de forma coherente para formar un programa que funcione
        correctamente.
        <br />
        <br />
        La codificación no tiene por qué ser frustrante, intentemos divertirnos un poco con ella. En
        esta sección espero que quede claro cómo se puede adoptar un enfoque basado en modelos
        lógicos para escribir código básico. Voy a proporcionar muchos ejemplos, y si te quedas
        atascado, está bien continuar y volver más tarde. Intente tener una idea de lo que está
        sucediendo en general jugando con el código.
      </p>
      <Link className="next" to="/coding/primitives">
        Siguiente: #3.1 📊 Tipos de datos básicos
      </Link>
    </>
  )
}
