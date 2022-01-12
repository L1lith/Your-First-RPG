import { languages, defaultLanguage } from '../../i18n'
import { useLocation, navigate } from '@reach/router'

export default function useLanguage() {
  //const resolvedURL = url === null ? ourLocation : smartURL(url)
  //if (resolvedURL.origin !== ourLocation.origin) return url // Don't perform translation on other origins
  const ourLocation = useLocation()
  const pathSegments = ourLocation.pathname.split('/').filter(Boolean)
  const isDefaultLanguage = pathSegments.length < 1 || !languages.includes(pathSegments[0])
  // const setLanguage = language => {
  //   if (!languages.includes(language)) throw new Error('Invalid language supplied')
  //   // const pathSegments = ourLocation.pathname.split('/').filter(Boolean)
  //   // const isDefaultLanguage = pathSegments.length < 1 || !languages.includes(pathSegments[0])
  //   const newPath = (language === defaultLanguage ? [] : [language])
  //     .concat(isDefaultLanguage ? pathSegments : pathSegments.slice(1))
  //     .join('/')
  //   navigate(newPath)
  // }
  const language = isDefaultLanguage ? defaultLanguage : pathSegments[0]
  return language
}
