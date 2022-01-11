import BooleanDef from '../../components/Dictionary/es/BooleanDef'
import Output from '../../components/Dictionary/es/Output'
import Rules from '../../components/Dictionary/es/Rules'
import Stack from '../../components/Dictionary/es/Stack'
import EasterEgg from '../../components/EasterEgg'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import hoverVideo from '../../functions/hoverVideo'
import {
  logicModelChart,
  trafficStop
} from '../../styles/vision/logic-models-explained.module.scss'
import { Helmet } from 'react-helmet'

export default function LogicModelsExplained() {
  return (
    <div className="logic-models">
      <Helmet>
        <meta name="description" content="Arranging Logic Models" />
        <title>🧠 Explicación de modelos lógicos</title>
      </Helmet>
      <h2>#1.1 🧠 Explicación de modelos lógicos</h2>
      <br />
      <span className="introCard">
        <video autoPlay {...hoverVideo()} muted>
          <source src="/video/redstoneContraption.webm" type="video/webm" />
        </video>
        Minecraft es un gran lugar para comenzar tu aventura &#58;&#41;
      </span>
      <p>
        A continuación, aprenderá sobre la lógica <BooleanDef>booleana</BooleanDef> y cómo
        visualizarlos. Visualizante Los sistemas lógicos son muy útiles. El mundo entero opera
        usando la lógica; como como haces tu trabajo, cómo cruzas la calle o cómo navegas por un
        sitio web. Tomamos muchas decisiones sin darnos cuenta de que los hicimos.
      </p>
      {
        null /*<span className="introCard">
      <img src="/images/spaghettiBowl.jpeg" alt="SLC Spaghetti Bowl" />
      Nothing gets the blood pumping quite like being tail-gated around a 90° turn on the freeway.
      <span className="smallerText">
        {' '}
        Credit to <a target="_blank" href="https://www.utahseagull.com/2019/10/">Utah Seagull</a>
      </span>
    </span> */
      }
      <p>
        Todos los modelos lógicos tienen 3 componentes básicos
        <ol className={logicModelChart}>
          <li>
            <span className="bold">Datos de Entrada: </span>Una fuente de datos entrante a su modelo
            lógico que puede utilizar para tomar decisiones.
          </li>
          <li>
            <span className="bold">Reglas:</span> Esta es la "lógica" o el "código" de su modelo.
            Las reglas se utilizan para decidir cuál es el resultado (o salida) de nuestro modelo en
            función de la entrada.
          </li>
          <li>
            <span className="bold">Datos Resultantes: </span>Cuál es el resultado de su modelo
            lógico.
          </li>
        </ol>
        <br />
        <br />
        Imagínese que es un ingeniero civil que intenta optimizar el flujo de tráfico en una zona
        muy transitada. Nuestros datos de entrada son el flujo de automóviles hacia la autopista y
        sus destinos previstos. Nuestro <Output>resultado</Output> es el flujo de automóviles que
        salen de la autopista. Como ingeniero civil, nuestro modelo lógico no solo marcará la
        diferencia cuando alguien intente ponerse a trabajar rápidamente, sino que nuestra decisión
        finalmente marcará la diferencia entre la vida y la muerte cuando se produzca una conducción
        imprudente.
        <br />
        <br />
        Mientras mira este video, intente darse cuenta de todos los factores a los que los
        ingenieros civiles deben prestar atención al diseñar carreteras.
      </p>
      <YTVideo url="DOc0glzYYhw" thumbnail="/images/como-se-hacen-las-carreteras.jpg" />
      <p>
        "Eso es genial... pero ¿cómo se aplica esto a la codificación?" ¡Me alegra que hayas
        preguntado! Cuando estamos codificando nosotros también estamos escribiendo un sistema
        lógico para manejar el flujo de entrada de información (como el mouse y entrada de teclado
        al navegar por una página web) y el flujo de información de salida
        <Output>salida</Output> (como mostrar una página web o renderizar un videojuego). Como
        codificador, escribe (o "codifica") el <Rules>reglas</Rules> lógicas del sistema (como
        cuando el usuario hace clic en este enlace, lo lleva a esa página). Si bien decir que
        inventar una computadora o una carretera desde cero puede ser increíblemente complejo,
        ingenieros informáticos, civiles y de todo tipo aprovechan la tecnología y metodología que
        ha estado en desarrollo durante mucho más tiempo del que llevamos vivos.
      </p>
      Aquí hay una tabla que describe el modelo lógico que usamos cuando estamos en un semáforo. Tu
      cerebro proporciona las <Rules>reglas</Rules> de toma de decisiones del modelo lógico.
      <table className={trafficStop}>
        <thead>
          <th>Entrada (área geográfica)</th>
          <th>Salida (tipo de camino)</th>
        </thead>
        <tr>
          <td>Un campo relativamente plano</td>
          <td>Un campo plano de carretera largo, recto y de rápido movimiento</td>
        </tr>
        <tr>
          <td>Una ladera empinada</td>
          <td>Una carretera sinuosa y lenta con muchas señales</td>
        </tr>
        <tr>
          <td>Una ciudad llena de gente</td>
          <td>Una autopista muy ancha con muchas entradas y salidas</td>
        </tr>
      </table>
      <p>
        En codificación tenemos un conjunto de software y metodología que hace que describir nuestro
        sistema lógico más fácil. En el mundo del desarrollo de sitios web, a esto lo llamamos{' '}
        <Stack>pila</Stack>. Muy parecido a un El ingeniero civil debe considerar la eficacia de un
        sistema de carreteras, al construir un sitio web, debe considerar muchos aspectos del
        sistema, como la seguridad cibernética (permitir datos de entrada inseguros ha dio lugar a
        muchas identidades y tarjetas de crédito robadas), la experiencia del usuario y el atractivo
        visual. Por Entendiendo mejor las <Rules>reglas</Rules> lógicas detrás de nuestro software,
        entendemos mejor dónde está surgen problemas, evitando fugas catastróficas de la base de
        datos y la rabia del usuario abandona antes de que ocurrir.
        <br />
        <br />
      </p>
      <YTVideo url="qybUFnY7Y8w" thumbnail="/images/this-too-shall-pass.jpg" />
      <span className="italic">¡Funciona perfectamente el 60% del tiempo!</span>
      <p>
        Al diseñar sistemas de software, es importante pensarlo de principio a fin. La mayoría de
        los errores de software provienen de programadores que piensan "no es mi trabajo" o que no
        hacen un esfuerzo adicional para considerar los casos extremos porque "funcionó cuando lo
        ejecuté". Debe recordar los 3 componentes de su modelo lógico, así que primero considere la{' '}
        <span className="bold">entrada</span> de su usuario. Al navegar por un sitio, el usuario da
        muchas entradas, como hacer clic en un enlace, desplazarse por la página, iniciar sesión o
        enviar un formulario.
        <br />
        <br />A continuación, debe pensar en cada paso de su código y en cómo estas{' '}
        <Rules>reglas</Rules> manejan en última instancia las entradas de sus usuarios y las
        traducen en la <Output>salida</Output> del programa. No tome atajos ni deje problemas para
        que alguien más se ocupe de ellos. Construir el mejor software que puedas la primera vez
        (definitivamente escribirás un código desordenado al comenzar, pero después de hacer tu
        primer borrador de algo, intenta regresar y buscar formas de mejorarlo) te ahorrará mucho
        tiempo más adelante. sobre. ¡Comprenda el funcionamiento interno profundo de su{' '}
        <Stack>pila</Stack>{' '}
        <span className="underline">jugando con ella y haciendo preguntas!</span>
        <br />
        <br />
        El <Output /> es lo que experimentan los usuarios de su software (este es un aspecto{' '}
        <span className="underline">crítico</span> de su modelo lógico), por lo que al codificar
        siempre debe pensar en lo que sus usuarios están tratando de lograr, y no solo en todos los
        posibles problemas y errores que podrían ejecutar. en, pero también cómo hacer que su
        software sea sencillo y conveniente. Al igual que un buen diseño de carreteras, su software
        debe servir de manera efectiva a sus usuarios, en lugar de obligar a sus usuarios a
        concentrarse en juguetear tediosamente con un software mal diseñado. Asuma la
        responsabilidad como ingeniero de fallas evitables y otros problemas de diseño que surjan
        con su software.
      </p>
      <Link className="next" to="/toying">
        Siguiente: #2.0 🧩 Jugando con rompecabezas lógicos
      </Link>
      <br />
      <br />
      <EasterEgg>
        <p>Bono: ¿Te gustó la máquina de Rube Goldberg?</p>
        <YTVideo url="Av07QiqmsoA" thumbnail="/images/lifes-lemons.jpg" />
      </EasterEgg>
    </div>
  )
}
