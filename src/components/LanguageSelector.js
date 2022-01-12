import { languages } from '../../i18n'
import translatePath from '../functions/translatePath'
import {
  languageMenu,
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
  es: 'Spanish'
}

function LanguageSelector() {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const location = useLocation()
  console.log(Router)
  return (
    <>
      <FontAwesomeIcon
        className={languageIcon}
        onClick={() => {
          setLanguageMenuOpen(true)
        }}
        title="Languages"
        icon={faGlobe}
      />
      {languageMenuOpen ? (
        <div className={languageMenu}>
          <h2 className={title}>Languages</h2>
          {languages
            .filter(language => languageMap.hasOwnProperty(language))
            .sort()
            .map((language, i) => (
              <span
                onClick={() => {
                  setLanguageMenuOpen(false)
                  navigate(translatePath(location.pathname, language))
                }}
                lang={language}
                className={languageOption}
                key={i}>
                {languageMap[language]}
              </span>
            ))}
        </div>
      ) : null}
    </>
  )
}

export default LanguageSelector
