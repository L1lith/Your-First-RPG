import { Helmet } from 'react-helmet'

export default function Support() {
  return (
    <>
      <Helmet>
        <title>Support</title>
        <meta
          name="description"
          content="¡Aprende a crear tu propio juego de aventuras en línea y compártelo con tus amigos!"
        />
      </Helmet>
      Want to support me? Star my project on GitHub, it's free! Also please consider sharing this
      course with your friends if you enjoyed it, knowledge is power :)
      <br />
      <br />
      <a target="_blank" href="https://github.com/L1lith/Your-First-RPG/">
        https://github.com/L1lith/Your-First-RPG/
      </a>
      <br />
      <br />
      Once this project gets attention from the community I'll consider creating a follow-up course!
    </>
  )
}
