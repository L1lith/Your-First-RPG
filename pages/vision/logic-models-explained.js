import Link from 'next-multilingual/link'
import hoverVideo from '../../functions/hoverVideo'
import { NextSeo } from 'next-seo'
import YTVideo from '../../components/YTVideo'
import EasterEgg from '../../components/EasterEgg'
import styles from '../../styles/vision/logic-models-explained.module.scss'
import Stack from '../../components/Dictionary/Stack'
import Input from '../../components/Dictionary/Input'
import Rules from '../../components/Dictionary/Rules'
import Output from '../../components/Dictionary/Output'
import BooleanDef from '../../components/Dictionary/BooleanDef'
import { useMessages } from 'next-multilingual/messages'

export default () => {
  const messages = useMessages()
  return (
    <div className="logic-models">
      <NextSeo description="Arranging Logic Models" title="🧠 Logic Models Explained" />
      <h2>{messages.format('pageTitle')}</h2>
      <br />
      <span className="intro-card">
        <video autoPlay {...hoverVideo()} muted>
          <source src="/video/redstoneContraption.webm" type="video/webm" />
        </video>
        {messages.format('introDescription')}
      </span>
      <p>
        {messages.format('introPartOne')}
        <BooleanDef />
        {messages.format('introPartTwo')}
      </p>
      {
        null /*<span className="intro-card">
      <img src="/images/spaghettiBowl.jpeg" alt="SLC Spaghetti Bowl" />
      Nothing gets the blood pumping quite like being tail-gated around a 90° turn on the freeway.
      <span className="smaller-text">
        {' '}
        Credit to <a target="_blank" href="https://www.utahseagull.com/2019/10/">Utah Seagull</a>
      </span>
    </span> */
      }
      <p>
        {messages.format('logicModelIntro')}
        <ol className={styles['logic-model-chart']}>
          <li>
            <span className="bold">{messages.format('inputLabel')}: </span>
            {messages.format('inputDescription')}
          </li>
          <li>
            <span className="bold">{messages.format('rulesLabel')}: </span>
            {messages.format('rulesDescription')}
          </li>
          <li>
            <span className="bold">{messages.format('outputLabel')}: </span>
            {messages.format('outputDescription')}
          </li>
        </ol>
        <br />
        <br />
        {messages.format('carsPartOne')}
        <Input />
        {messages.format('carsPartTwo')}
        <Output />
        {messages.format('carsPartThree')}
        <br />
        <br />
        {messages.format('carVideoIntro')}
      </p>
      <YTVideo url="9XIjqdk69O4" thumbnail="/images/highway-geometry.jpg" />
      <p>
        {messages.format('carsPartFour')}
        <Output />
        {messages.format('carsPartFive')}
      </p>
      <span>{messages.format('decisionTableIntro')}</span>
      <table className={styles['traffic-stop']}>
        <thead>
          <th>{messages.format('decisionTableLabelOne')}</th>
          <th>{messages.format('decisionTableLabelTwo')}</th>
        </thead>
        <tr>
          <td>{messages.format('decisionTableInputOne')}</td>
          <td>{messages.format('decisionTableOutputOne')}</td>
        </tr>
        <tr>
          <td>{messages.format('decisionTableInputTwo')}</td>
          <td>{messages.format('decisionTableOutputTwo')}</td>
        </tr>
        <tr>
          <td>{messages.format('decisionTableInputThree')}</td>
          <td>{messages.format('decisionTableOutputThree')}</td>
        </tr>
      </table>
      <p>
        {messages.format('codingPartOne')}
        <Stack />
        {messages.format('codingPartTwo')}
      </p>
      <YTVideo url="hZdLjyK89Cw" thumbnail="/images/self-operating-napkin.jpg" />
      <span className="italic">
        <td>{messages.format('goldbergDescription')}</td>
      </span>
      <p>
        {messages.format('codeDesignPartOne')}
        <Input />
        {messages.format('codeDesignPartTwo')}
        <br />
        <br />
        {messages.format('codeDesignPartThree')}
        <Rules />
        {messages.format('codeDesignPartFour')}
        <Output />
        {messages.format('codeDesignPartFive')}
        <Stack /> <span className="underline">{messages.format('codeDesignPartSix')}</span>
        <br />
        <br />
        {messages.format('codeDesignPartSeven')}
        <Output />
        {messages.format('codeDesignPartEight')}
        <span className="underline">{messages.format('codeDesignPartNine')}</span>
        {messages.format('codeDesignPartTen')}
      </p>
      <Link href="/toying">
        <a className="next">{messages.format('nextPageLink')}</a>
      </Link>
      <br />
      <br />
      <EasterEgg>
        <p>{messages.format('easterEgg')}</p>
        <YTVideo url="Av07QiqmsoA" thumbnail="/images/lifes-lemons.jpg" />
      </EasterEgg>
    </div>
  )
}
