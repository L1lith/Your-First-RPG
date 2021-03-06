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
    <>
      <Helmet>
        <meta name="description" content="Arranging Logic Models" />
        <title>馃 Explicaci贸n de modelos l贸gicos</title>
      </Helmet>
      <h2>#1.1 馃 Explicaci贸n de modelos l贸gicos</h2>
      <br />
      <span className="introCard">
        <video autoPlay {...hoverVideo()} muted>
          <source src="/video/redstoneContraption.webm" type="video/webm" />
        </video>
        Minecraft es un gran lugar para comenzar tu aventura &#58;&#41;
      </span>
      <p>
        A continuaci贸n, aprender谩 sobre la l贸gica <BooleanDef>boolean</BooleanDef> y c贸mo
        visualizarlos. Visualizante Los sistemas l贸gicos son muy 煤tiles. El mundo entero opera
        usando la l贸gica; como como haces tu trabajo, c贸mo cruzas la calle o c贸mo navegas por un
        sitio web. Tomamos muchas decisiones sin darnos cuenta de que los hicimos.
      </p>
      {
        null /*<span className="introCard">
      <img src="/images/spaghettiBowl.jpeg" alt="SLC Spaghetti Bowl" />
      Nothing gets the blood pumping quite like being tail-gated around a 90掳 turn on the freeway.
      <span className="smallerText">
        {' '}
        Credit to <a target="_blank" href="https://www.utahseagull.com/2019/10/">Utah Seagull</a>
      </span>
    </span> */
      }
      <p>
        Todos los modelos l贸gicos tienen 3 componentes b谩sicos
        <ol className={logicModelChart}>
          <li>
            <span className="bold">Datos de Entrada: </span>Una fuente de datos entrante a su modelo
            l贸gico que puede utilizar para tomar decisiones.
          </li>
          <li>
            <span className="bold">Reglas:</span> Esta es la "l贸gica" o el "c贸digo" de su modelo.
            Las reglas se utilizan para decidir cu谩l es el resultado (o salida) de nuestro modelo en
            funci贸n de la entrada.
          </li>
          <li>
            <span className="bold">Datos Resultantes: </span>Cu谩l es el resultado de su modelo
            l贸gico.
          </li>
        </ol>
        <br />
        <br />
        Imag铆nese que es un ingeniero civil que intenta optimizar el flujo de tr谩fico en una zona
        muy transitada. Nuestros datos de entrada son el flujo de autom贸viles hacia la autopista y
        sus destinos previstos. Nuestro <Output>resultado</Output> es el flujo de autom贸viles que
        salen de la autopista. Como ingeniero civil, nuestro modelo l贸gico no solo marcar谩 la
        diferencia cuando alguien intente ponerse a trabajar r谩pidamente, sino que nuestra decisi贸n
        finalmente marcar谩 la diferencia entre la vida y la muerte cuando se produzca una conducci贸n
        imprudente.
        <br />
        <br />
        Mientras mira este video, intente darse cuenta de todos los factores a los que los
        ingenieros civiles deben prestar atenci贸n al dise帽ar carreteras.
      </p>
      <YTVideo url="DOc0glzYYhw" thumbnail="/images/como-se-hacen-las-carreteras.jpg" />
      <p>
        "Eso es genial... pero 驴c贸mo se aplica esto a la codificaci贸n?" 隆Me alegra que hayas
        preguntado! Cuando estamos codificando nosotros tambi茅n estamos escribiendo un sistema
        l贸gico para manejar el flujo de entrada de informaci贸n (como el mouse y entrada de teclado
        al navegar por una p谩gina web) y el flujo de informaci贸n de salida
        <Output>salida</Output> (como mostrar una p谩gina web o renderizar un videojuego). Como
        codificador, escribe (o "codifica") el <Rules>reglas</Rules> l贸gicas del sistema (como
        cuando el usuario hace clic en este enlace, lo lleva a esa p谩gina). Si bien decir que
        inventar una computadora o una carretera desde cero puede ser incre铆blemente complejo,
        ingenieros inform谩ticos, civiles y de todo tipo aprovechan la tecnolog铆a y metodolog铆a que
        ha estado en desarrollo durante mucho m谩s tiempo del que llevamos vivos.
      </p>
      Aqu铆 hay una tabla que describe el modelo l贸gico que usamos cuando estamos en un sem谩foro. Tu
      cerebro proporciona las <Rules>reglas</Rules> de toma de decisiones del modelo l贸gico.
      <table className={trafficStop}>
        <thead>
          <th>Entrada (谩rea geogr谩fica)</th>
          <th>Salida (tipo de camino)</th>
        </thead>
        <tr>
          <td>Un campo relativamente plano</td>
          <td>Un campo plano de carretera largo, recto y de r谩pido movimiento</td>
        </tr>
        <tr>
          <td>Una ladera empinada</td>
          <td>Una carretera sinuosa y lenta con muchas se帽ales</td>
        </tr>
        <tr>
          <td>Una ciudad llena de gente</td>
          <td>Una autopista muy ancha con muchas entradas y salidas</td>
        </tr>
      </table>
      <p>
        En codificaci贸n tenemos un conjunto de software y metodolog铆a que hace que describir nuestro
        sistema l贸gico m谩s f谩cil. En el mundo del desarrollo de sitios web, a esto lo llamamos{' '}
        <Stack>pila</Stack>. Muy parecido a un El ingeniero civil debe considerar la eficacia de un
        sistema de carreteras, al construir un sitio web, debe considerar muchos aspectos del
        sistema, como la seguridad cibern茅tica (permitir datos de entrada inseguros ha dio lugar a
        muchas identidades y tarjetas de cr茅dito robadas), la experiencia del usuario y el atractivo
        visual. Por Entendiendo mejor las <Rules>reglas</Rules> l贸gicas detr谩s de nuestro software,
        entendemos mejor d贸nde est谩 surgen problemas, evitando fugas catastr贸ficas de la base de
        datos y la rabia del usuario abandona antes de que ocurrir.
        <br />
        <br />
      </p>
      <YTVideo
        url="qybUFnY7Y8w"
        query={{ cc_load_policy: '0' }}
        thumbnail="/images/this-too-shall-pass.jpg"
      />
      <span className="italic">隆Funciona perfectamente el 60% del tiempo!</span>
      <p>
        Al dise帽ar sistemas de software, es importante pensarlo de principio a fin. La mayor铆a de
        los errores de software provienen de programadores que piensan "no es mi trabajo" o que no
        hacen un esfuerzo adicional para considerar los casos extremos porque "funcion贸 cuando lo
        ejecut茅". Debe recordar los 3 componentes de su modelo l贸gico, as铆 que primero considere la{' '}
        <span className="bold">entrada</span> de su usuario. Al navegar por un sitio, el usuario da
        muchas entradas, como hacer clic en un enlace, desplazarse por la p谩gina, iniciar sesi贸n o
        enviar un formulario.
        <br />
        <br />A continuaci贸n, debe pensar en cada paso de su c贸digo y en c贸mo estas{' '}
        <Rules>reglas</Rules> manejan en 煤ltima instancia las entradas de sus usuarios y las
        traducen en la <Output>salida</Output> del programa. No tome atajos ni deje problemas para
        que alguien m谩s se ocupe de ellos. Construir el mejor software que puedas la primera vez
        (definitivamente escribir谩s un c贸digo desordenado al comenzar, pero despu茅s de hacer tu
        primer borrador de algo, intenta regresar y buscar formas de mejorarlo) te ahorrar谩 mucho
        tiempo m谩s adelante. sobre. 隆Comprenda el funcionamiento interno profundo de su{' '}
        <Stack>pila</Stack>{' '}
        <span className="underline">jugando con ella y haciendo preguntas!</span>
        <br />
        <br />
        El <Output /> es lo que experimentan los usuarios de su software (este es un aspecto{' '}
        <span className="underline">cr铆tico</span> de su modelo l贸gico), por lo que al codificar
        siempre debe pensar en lo que sus usuarios est谩n tratando de lograr, y no solo en todos los
        posibles problemas y errores que podr铆an ejecutar. en, pero tambi茅n c贸mo hacer que su
        software sea sencillo y conveniente. Al igual que un buen dise帽o de carreteras, su software
        debe servir de manera efectiva a sus usuarios, en lugar de obligar a sus usuarios a
        concentrarse en juguetear tediosamente con un software mal dise帽ado. Asuma la
        responsabilidad como ingeniero de fallas evitables y otros problemas de dise帽o que surjan
        con su software.
      </p>
      <Link className="next" to="/toying">
        Siguiente: #2.0 馃З Jugando con rompecabezas l贸gicos
      </Link>
      <br />
      <br />
      <EasterEgg>
        <p>Bono: 驴Te gust贸 la m谩quina de Rube Goldberg?</p>
        <YTVideo url="Av07QiqmsoA" thumbnail="/images/lifes-lemons.jpg" />
      </EasterEgg>
    </>
  )
}
