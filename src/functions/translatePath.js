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

  let newPath = hasLang
    ? lang + pathSegments.slice(1).join('/')
    : lang + '/' + pathSegments.join('/')
  if (path.startsWith('/') && !newPath.startsWith('/')) newPath = '/' + newPath
  if (path.endsWith('/') && !newPath.endsWith('/')) newPath = newPath + '/'
  return newPath
}

export default translatePath
