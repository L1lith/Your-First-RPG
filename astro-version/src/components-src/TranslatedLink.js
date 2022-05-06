import translatePath from '../functions/translatePath'
import { Link } from 'gatsby'

function TranslatedLink(props) {
  const newPath = translatePath(props.to || null, props.lang || null)
  const newProps = { ...props, to: newPath }
  delete newProps.lang
  return <Link {...newProps} />
}

export default TranslatedLink
