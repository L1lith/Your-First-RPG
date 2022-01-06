import Docs from '../../components/Dictionary/Docs'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import { visionIntro } from '../../styles/vision/index.module.scss'
import { Helmet } from 'react-helmet'

export default function CodingMindset() {
  return (
    <div className={visionIntro}>
      <Helmet>
        <meta name="description" content="Getting in the coding mindset" />
        <title>🗺️ Planificándolo</title>
      </Helmet>
      <h1 className="title">Capítulo 1</h1>
      <ol className="toc pages">
        <li>
          <Link to="/vision#lesson">#1.0 🗺️ Planificándolo</Link>
        </li>
        <li>
          <Link to="/vision/logic-models-explained">#1.1 🧠 Explicación de modelos lógicos</Link>
        </li>
      </ol>
      <h2 id="lesson">#1.0 🗺️ Planificándolo</h2>
      <span className="introCard">
        <YTVideo url="wiaamJZ-hHI" thumbnail="/images/how-to-avoid-burnout.jpg" />
        Realice la codificación a su propio ritmo y tómese un tiempo para usted
      </span>
      <p>
        Los programadores son excelentes para escribir código que solo ellos pueden entender. Muchos
        principiantes pueden sentirse alienados después de escuchar "solo lea el <Docs />
        ", y no tienen la oportunidad adecuada de comprender por qué los programadores hacen lo que
        hacen.
        <br />
        <br />
        Sitios de documentación como{' '}
        <a target="_blank" href="https://nodejs.org/docs/latest-v15.x/api/">
          este
        </a>{' '}
        puede ser una herramienta valiosa para programadores experimentados, pero para un
        principiante es un dolor de cabeza total. Es importante comprender los conceptos en términos
        simples para que pueda comenzar a visualizar lo que está tratando de hacer.
        <br />
        <br />
        Otra clave para a prender es practicar. En esta sección, lo guiaré a través de conceptos
        básicos de codificación como resolución de problemas, reglas lógicas y trabajo con datos. En
        el próximo capítulo consolidaremos estos conceptos con actividades prácticas.
      </p>
      <Link className="next" to="/vision/logic-models-explained">
        #1.1 🧠 Explicación de modelos lógicos
      </Link>
    </div>
  )
}
