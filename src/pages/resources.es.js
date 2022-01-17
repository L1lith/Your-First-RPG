import { resources, resourceList } from '../styles/resources.module.scss'
import { Helmet } from 'react-helmet'

export default function Resources() {
  return (
    <div className={resources}>
      <Helmet>
        <title>Recursos</title>
        <meta name="description" content="Recursos para ayudarte a aprender a programar " />
      </Helmet>
      <h2>Recursos</h2>
      Este curso se enfoca en ser apetecible para los principiantes, así que si desea aprender sobre
      JavaScript con más profundidad, o si tiene preguntas, le recomiendo los siguientes recursos:
      <table className={resourceList}>
        <thead>
          <tr>
            <th>Título/Tipo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                target="_blank"
                className="bold"
                href="https://www.youtube.com/c/TheCodingTrain/featured"
              >
                The Coding Train (canal de YouTube)
              </a>
            </td>
            <td>
              Daniel Schiffman enseña todo tipo de cosas, incluido el desarrollo web, juegos 2D
              desarrollo, y más. Lo recomendaría encarecidamente si está buscando una forma
              atractiva para obtener más información sobre la codificación.
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://es.stackoverflow.com/">
                StackOverflow (Preguntas y respuestas)
              </a>
            </td>
            <td>
              StackOverflow es un poco como las respuestas de Yahoo del mundo de la codificación
              (pero por favor no spam preguntas tontas). Si tiene un problema, es probable que
              alguien haya tenido exactamente lo mismo uno antes Si estás atascado y no puedes
              resolver algo, busca allí, <span className="bold">busque en Google</span>, y si
              todavía no puede encontrar la respuesta, sienta libre de abrir una nueva pregunta.
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://es.javascript.info/">
                JavaScript.info (Glosario)
              </a>
            </td>
            <td>
              JavaScript.info es un gran recurso para obtener aclaraciones sobre conceptos
              específicos de JS
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://developer.mozilla.org/es/docs/Web/JavaScript">
                Mozilla Developer Network (Glosario)
              </a>
            </td>
            <td>
              El MDN es el sitio más extenso para aprender sobre tecnologías web. Está mantenido por
              la fundación Mozilla, pero puede ser demasiado técnico o carecer información en
              ciertas áreas
            </td>
          </tr>
          <tr>
            <td>
              <a
                target="_blank"
                href="https://github.com/L1lith/Your-First-RPG/issues/new?assignees=&labels=help+request&template=help-request.md"
              >
                Soporte de YourFirstRPG (seguimiento de problemas de GitHub)
              </a>
            </td>
            <td>
              Si te quedas atascado y has agotado tus otras opciones, puedes pedir ayuda aquí. Sea
              considerado y no envíe spam a la sección de problemas, y verifique primero si alguien
              hizo esa pregunta antes.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
