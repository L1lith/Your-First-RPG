import { languages } from '../../i18n'
import translatePath from '../functions/translatePath'
import {
  languageMenu,
  languageList,
  languageIcon,
  title,
  languageOption,
  close
} from '../styles/LanguageSelector.module.scss'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate, useLocation, navigate } from '@reach/router'
import * as Router from '@reach/router'
import React, { Component, useState } from 'react'

const languageMap = {
  en: 'English',
  es: 'Español'
}

function LanguageSelector(props) {
  const { setPopup } = props
  //const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const location = useLocation()
  const languageMenu = (
    <div className={languageList}>
      <h2 className={title}>Languages</h2>
      {languages
        .filter(language => languageMap.hasOwnProperty(language))
        .sort()
        .map((language, i) => (
          <a
            onClick={() => {
              setPopup(null)
              navigate(translatePath(location.pathname, language))
            }}
            lang={language}
            className={languageOption}
            key={i}>
            {languageMap[language]}
          </a>
        ))}
      <span
        onClick={() => {
          setPopup(null)
        }}
        className={'icon ' + close}>
        ❌
      </span>
    </div>
  )
  return (
    <div className={languageMenu}>
      <FontAwesomeIcon
        className={languageIcon}
        onClick={() => {
          setPopup(languageMenu)
        }}
        title="Languages"
        icon={faGlobe}
      />
    </div>
  )
}

export default LanguageSelector
