import { languages } from '../../i18n'
import translatePath from '../functions/translatePath'
import {
  languageMenu,
  languageList,
  languageIcon,
  title,
  languageOption
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
  const { setPageDisabled } = props
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const location = useLocation()
  return (
    <div className={languageMenu}>
      <FontAwesomeIcon
        className={languageIcon}
        onClick={() => {
          setLanguageMenuOpen(true)
          setPageDisabled(true)
        }}
        title="Languages"
        icon={faGlobe}
      />
      {languageMenuOpen ? (
        <div className={languageList}>
          <h2 className={title}>Languages</h2>
          {languages
            .filter(language => languageMap.hasOwnProperty(language))
            .sort()
            .map((language, i) => (
              <a
                onClick={() => {
                  setLanguageMenuOpen(false)
                  setPageDisabled(false)
                  navigate(translatePath(location.pathname, language))
                }}
                lang={language}
                className={languageOption}
                key={i}>
                {languageMap[language]}
              </a>
            ))}
        </div>
      ) : null}
    </div>
  )
}

export default LanguageSelector
