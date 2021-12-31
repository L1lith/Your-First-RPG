//import { useLocation } from '@reach/router'
import { languages } from '../../i18n'
import Link from '../components/TranslatedLink'
import useLanguage from '../functions/useLanguage'

function TranslatedLink(props) {
  if (typeof props.to !== 'string') throw new Error('Expected a string for the Link')
  const lang = typeof props.lang == 'string' ? props.lang : useLanguage()
  const pathSegments = props.to.split('/').filter(Boolean)
  let href = languages.includes(pathSegments[0])
    ? lang + pathSegments.slice(1).join('/')
    : lang + '/' + pathSegments.join('/')
  if (props.to.startsWith('/')) href = '/' + href
  if (props.to.endsWith('/')) href = href + '/'
  const newProps = { ...props, to: href }
  return <Link {...newProps} />
}

export default TranslatedLink
