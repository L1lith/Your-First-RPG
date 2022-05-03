import Link from '../components/TranslatedLink'
import useTranslation from '../functions/useTranslation'
import { notFound } from '../styles/NotFoundPage.module.scss'

// markup
const NotFoundPage = () => {
  return (
    <div className={notFound}>
      {useTranslation('Sorry, this page could not be found.', {
        es: 'Lo sentimos, esta página no se pudo encontrar.'
      })}
      <br />
      <Link to="/">{useTranslation('Go Home', { es: 'Ir a la pagina principal' })}</Link>
    </div>
  )
}

export default NotFoundPage
