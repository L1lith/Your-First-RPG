import { languages, defaultLanguage } from '../../i18n'
import smartURL from './smartURL'
import { useLocation } from '@reach/router'

export default function useLanguage() {
  //const resolvedURL = url === null ? ourLocation : smartURL(url)
  //if (resolvedURL.origin !== ourLocation.origin) return url // Don't perform translation on other origins
  const ourLocation = useLocation()
  const pathSegments = ourLocation.pathname.split('/').filter(Boolean)
  return pathSegments.length < 1 || !languages.includes(pathSegments[0])
    ? defaultLanguage
    : pathSegments[0]
}
