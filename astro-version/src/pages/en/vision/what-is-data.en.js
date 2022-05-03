import BooleanDef from '../../components/Dictionary/en/BooleanDef'
import Output from '../../components/Dictionary/en/Output'
import Software from '../../components/Dictionary/en/Software'
import Stack from '../../components/Dictionary/en/Stack'
import EasterEgg from '../../components/EasterEgg'
import Link from '../../components/TranslatedLink'
import YTVideo from '../../components/YTVideo'
import hoverVideo from '../../functions/hoverVideo'
import { datas } from '../../styles/vision/what-is-data.module.scss'
import { Helmet } from 'react-helmet'

export default function LogicModelsExplained() {
  return (
    <>
      <Helmet>
        <meta name="description" content="What is data? A simple explanation" />
        <title>🔢 What is Data?</title>
      </Helmet>
      <h2>#1.1 🔢 What is Data?</h2>
      <p>
        Anything can be data, data is at the heart of coding. Data is simply another word for
        information. Everything we think about is information. We can put data into lots of
        different categories.
      </p>
      <table className={datas}>
        <tr>
          <th>Category</th>
          <th>Example Data</th>
        </tr>
        <tr>
          <td>Number</td>
          <td>1, 4, 61, 2</td>
        </tr>
        <tr>
          <td>Ice Cream Flavors</td>
          <td>Rocky Road, Cookies &amp; Cream, Mint, Sherbert, Vanilla</td>
        </tr>
        <tr>
          <td>Video Games</td>
          <td>Fortnite, Apex Legends, Minecraft</td>
        </tr>
      </table>
      <Link className="next" to="/vision/logic-models-explained">
        Next: #1.2 🧠 Logic Models Explained
      </Link>
    </>
  )
}
