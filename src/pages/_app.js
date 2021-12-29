import Header from '../components/header'
import { page } from '../styles/_app.module.scss'
//import '../styles/_normalize.scss'
//import '../styles/_global.scss'
import { Fragment } from 'react'
//import { DefaultSeo } from 'next-seo'

/* <DefaultSeo titleTemplate="%s - YFRPG" defaultTitle="Your First RPG"></DefaultSeo>
<DefaultSeo description="Learn to make games in JavaScript for beginners" /> */

export default function MyApp({ children }) {
  return (
    <Fragment>
      <Header />
      <main className={'page ' + page}>{children}</main>
    </Fragment>
  )
}
