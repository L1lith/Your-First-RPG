import { languages, defaultLanguage } from '../../i18n'
import { useLocation } from '@reach/router'

export default function useLanguage() {
  const location = useLocation()
  const { pathname } = location
  const pathSegments = pathname.split('/')
  return pathSegments.length < 1 || !languages.includes(pathSegments[0])
    ? defaultLanguage
    : pathSegments[0]
}
