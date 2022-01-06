//import { useLocation } from '@reach/router'
import { languages, defaultLanguage } from '../../i18n'
import useLanguage from '../functions/useLanguage'
import { Link } from 'gatsby'

function TranslatedLink(props) {
  if (typeof props.to !== 'string') throw new Error('Expected a string for the Link')
  let lang = typeof props.lang == 'string' ? props.lang : useLanguage(props.to)
  console.log({ lang })
  if (lang === defaultLanguage) lang = ''
  const url = props.to
  const pathSegments = url.split('/').filter(Boolean)
  const hasLang = pathSegments.length > 0 && languages.includes(pathSegments[0])
  //console.log('to', props.to, 'lang', lang, 'segs', pathSegments, 'hasLang', hasLang)

  let newPath = hasLang
    ? lang + pathSegments.slice(1).join('/')
    : lang + '/' + pathSegments.join('/')
  if (props.to.startsWith('/') && !newPath.startsWith('/')) newPath = '/' + newPath
  if (props.to.endsWith('/') && !newPath.endsWith('/')) newPath = newPath + '/'
  const newProps = { ...props, to: newPath }
  delete newProps.children
  return <Link {...newProps}>{props.children || null}</Link>
}

export default TranslatedLink
