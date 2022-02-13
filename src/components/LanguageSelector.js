import { languages, languagesProperNames, languagesShorthands } from '../../i18n'
import translatePath from '../functions/translatePath'
import useLanguage from '../functions/useLanguage'
import {
  languageMenu,
  languageList,
  languageIcon,
  title,
  languageOption,
  close,
  current
} from '../styles/LanguageSelector.module.scss'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate, useLocation, navigate } from '@reach/router'
import * as Router from '@reach/router'
import React, { Component, useState } from 'react'

function LanguageSelector(props) {
  const { setPopup } = props
  //const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const location = useLocation()
  const language = useLanguage()
  const languageMenuComponent = (
    <div className={languageList}>
      <h2 className={title}>Languages</h2>
      {languages
        .filter(language => languagesProperNames.hasOwnProperty(language))
        .sort()
        .map((language, i) => (
          <a
            onClick={() => {
              setPopup(null)
              navigate(translatePath(location.pathname, language))
            }}
            lang={language}
            className={languageOption}
            key={i}
          >
            {languagesProperNames[language]}
          </a>
        ))}
      <span
        onClick={() => {
          setPopup(null)
        }}
        className={'icon ' + close}
      >
        ❌
      </span>
    </div>
  )
  return (
    <div
      onClick={() => {
        setPopup(languageMenuComponent)
      }}
      className={languageMenu}
    >
      <FontAwesomeIcon className={languageIcon} title="Languages" icon={faGlobe} />
      <div className={current}>{languagesShorthands[language]}</div>
    </div>
  )
}

export default LanguageSelector
