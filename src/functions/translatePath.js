import { languages, defaultLanguage } from '../../i18n'
import useLanguage from '../functions/useLanguage'
import { useLocation } from '@reach/router'

function translatePath(path = null, lang = null) {
  if (path === null) path = useLocation().pathname
  if (typeof path !== 'string') throw new Error('Expected a string for the Link')
  if (lang === null) lang = useLanguage()
  if (lang === defaultLanguage) lang = ''
  const pathSegments = path.split('/').filter(Boolean)
  const hasLang = pathSegments.length > 0 && languages.includes(pathSegments[0])

  const newPathSegments = hasLang
    ? [lang].concat(pathSegments.slice(1))
    : [lang].concat(pathSegments)
  let newPath = newPathSegments.filter(Boolean).join('/')
  if (!newPath.startsWith('/')) newPath = '/' + newPath
  if (path.endsWith('/') && !newPath.endsWith('/')) newPath = newPath + '/'
  return newPath
}

export default translatePath
