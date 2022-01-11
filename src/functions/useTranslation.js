import { languages, defaultLanguage } from '../../i18n'
import useLanguage from './useLanguage'

function useTranslation(...args) {
  if (args.length < 1) throw new Error('Too few arguments')
  if (args.length > 2) throw new Error('Too many arguments')
  let translationMap
  if (args.length === 1) {
    translationMap = args[0]
  } else {
    translationMap = args[1]
  }
  if (typeof translationMap !== 'object' || translationMap === null)
    throw new Error('Expected the translation map to be an Object')
  if (args.length > 1) {
    translationMap[defaultLanguage] = args[0]
  }
  const lang = useLanguage()
  return translationMap[lang]
}

export default useTranslation
