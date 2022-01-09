import { page } from '../styles/AppLayout.module.scss'
import '../styles/_global.scss'
import '../styles/_normalize.scss'
import Header from './header'

//import { DefaultSeo } from 'next-seo'

/* <DefaultSeo titleTemplate="%s - YFRPG" defaultTitle="Your First RPG"></DefaultSeo>
<DefaultSeo description="Learn to make games in JavaScript for beginners" /> */
export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <main className={'page ' + page}>
        <noscript>This site requires JavaScript to function perfectly</noscript>
        {children}
      </main>
    </>
  )
}
