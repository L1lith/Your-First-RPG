import BooleanDef from '../../components/Dictionary/BooleanDef'
import Output from '../../components/Dictionary/Output'
import Stack from '../../components/Dictionary/Stack'
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
      <YTVideo url="9XIjqdk69O4" thumbnail="/images/highway-geometry.jpg" />
      <p>
        "That's great... but how does this apply to coding?" I'm glad you asked! When we are coding
        we too are writing a logic system to handle the input flow of information (like mouse and
        keyboard input when navigating a webpage) and the <Output /> flow of information (like
        displaying a webpage or rendering a video-game). As a coder you write (or "code") the
        logical rules of the system (like when the user clicks this link, take them to that page).
        While say inventing a computer or a roadway from scratch might be incredibly complex,
        computer, civil, and all kinds of engineers all take advantage of the technology and
        methodology that has been been in development for much longer than we have been alive.
      </p>
      Aquí hay una tabla que describe el modelo lógico que usamos cuando estamos en un semáforo. Tu
      cerebro proporciona las reglas de toma de decisiones del modelo lógico.
      <table className={trafficStop}>
        <thead>
          <th>Entrada</th>
          <th>Resultantes</th>
        </thead>
        <tr>
          <td>La luz es roja</td>
          <td>Come to a smooth stop before the intersection.</td>
        </tr>
        <tr>
          <td>La luz es amarilla</td>
          <td>Preste atención a la intersección. Si puede detenerse, deténgase rápidamente.</td>
        </tr>
        <tr>
          <td>La luz es verde</td>
          <td>Mire hacia adelante para asegurarse de que el tráfico esté despejado y continúe.</td>
        </tr>
      </table>
      <p>
        En codificación tenemos un conjunto de software y metodología que hace que describir nuestro
        sistema lógico más fácil. En el mundo del desarrollo de sitios web, a esto lo llamamos{' '}
        <Stack>pila</Stack>. Muy parecido a un El ingeniero civil debe considerar la eficacia de un
        sistema de carreteras, al construir un sitio web, debe considerar muchos aspectos del
        sistema, como la seguridad cibernética (permitir datos de entrada inseguros ha dio lugar a
        muchas identidades y tarjetas de crédito robadas), la experiencia del usuario y el atractivo
        visual. Por Entendiendo mejor las reglas lógicas detrás de nuestro software, entendemos
        mejor dónde está surgen problemas, evitando fugas catastróficas de la base de datos y la
        rabia del usuario abandona antes de que ocurrir.
        <br />
        <br />
      </p>
      <YTVideo url="hZdLjyK89Cw" thumbnail="/images/self-operating-napkin.jpg" />
      <span className="italic">it works perfectly 60% of the time!</span>
      <p>
        When designing software systems it's important to think it through from beginning to end.
        Most software bugs stem from coders thinking "it's not my job" or not putting that extra
        effort to consider edge cases because "it worked when I ran it". You must remember the 3
        components of your logic model, so first consider your user{' '}
        <span className="bold">input</span>. When navigating a site the user gives many inputs, like
        clicking a link, scrolling the page, logging in, or submitting a form.
        <br />
        <br />
        Next you must think about every step in your code, and how these{' '}
        <span className="bold">rules</span> ultimately handles your users input and translates it
        into the program's <Output />. Don't cut corners or leave problems for someone else to deal
        with. Building the best software you can the first time (you'll definitely write some messy
        code starting out, but after you make your first draft of something try to come back and
        look for ways to improve it) will save you a lot of time later on. Understand the deep inner
        workings of your <Stack /> by{' '}
        <span className="underline">toying around with it and asking questions</span>
        !
        <br />
        <br />
        The <Output /> is what the users of your software experience (this is a{' '}
        <span className="underline">critical</span> aspect of your logic model), so when coding you
        must always think about what your users are trying to achieve, and not only all the possible
        issues and bugs they could run into, but also how to make your software straightforward and
        convenient. Like good road design, your software should effectively serve your users,
        instead of forcing your users to be focused on tediously tinkering with poorly designed
        software. Take responsibility as an engineer for avoidable crashes and other design issues
        that arise with your software.
      </p>
      <Link className="next" to="/toying">
        Next: #2.0 🧩 Playing around with Logic Puzzles
      </Link>
      <br />
      <br />
      <EasterEgg>
        <p>Bonus: Liked the Rube Goldberg Machine?</p>
        <YTVideo url="Av07QiqmsoA" thumbnail="/images/lifes-lemons.jpg" />
      </EasterEgg>
    </div>
  )
}
