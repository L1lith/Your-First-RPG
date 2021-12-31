//import { useLocation } from '@reach/router'
import { languages } from '../../i18n'
import useLanguage from '../functions/useLanguage'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'

function TranslatedLink(props) {
  if (typeof props.to !== 'string') throw new Error('Expected a string for the Link')
  const lang = typeof props.lang == 'string' ? props.lang : useLanguage()
  const url = new URL(props.to, useLocation().origin)
  const pathSegments = url.pathname.split('/').filter(Boolean)
  const hasLang = pathSegments.length > 0 && languages.includes(pathSegments[0])
  //console.log('to', props.to, 'lang', lang, 'segs', pathSegments, 'hasLang', hasLang)

  let newPath =
    pathSegments.length > 0 && languages.includes(pathSegments[0])
      ? lang + pathSegments.slice(1).join('/')
      : lang + '/' + pathSegments.join('/')
  if (props.to.startsWith('/') && !newPath.startsWith('/')) newPath = '/' + newPath
  if (props.to.endsWith('/') && !newPath.endsWith('/')) newPath = newPath + '/'
  url.pathname = newPath
  const newProps = { ...props, to: url.toString() }
  return <Link {...newProps} />
}

export default TranslatedLink
