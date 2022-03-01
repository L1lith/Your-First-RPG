import adLibs from '!!raw-loader!../boiler/playground/adLibs'
import darkWalk from '!!raw-loader!../boiler/playground/darkWalk'
import elfQuest from '!!raw-loader!../boiler/playground/elfQuest'
import memorizationGame from '!!raw-loader!../boiler/playground/memorizationGame'
import rockPaperScissors from '!!raw-loader!../boiler/playground/rockPaperScissors'
import { defaultLanguage } from '../../i18n'
import downloadFile from '../functions/downloadFile'
import inspect from '../functions/inspect'
import useLanguage from '../functions/useLanguage'
import {
  vertical,
  sandbox,
  sharePopup,
  icon,
  close,
  settings,
  autoPlay,
  mainTitle,
  mode,
  inner,
  section,
  outputSpan,
  aceEditor,
  title,
  error,
  valid,
  upload,
  download,
  popup
} from '../styles/CodeSandbox.module.scss'
import AceEditor from './AceEditor'
import Output from './Dictionary/en/Output'
import {
  faPlayCircle,
  faDownload,
  faUpload,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import { Component, Fragment, useState, useEffect, useRef } from 'react'
import { useQueryParam, BooleanParam, StringParam } from 'use-query-params'

const templates = {
  elfQuest,
  darkWalk,
  memorizationGame,
  rockPaperScissors,
  adLibs
}

function getTemplate(code) {
  if (templates.hasOwnProperty(code)) {
    return templates[code]
  } else {
    throw new Error('Unknown Template')
  }
}

function CodeSandbox(props) {
  const [autoPlayQuery] = useQueryParam('autoPlay', BooleanParam)
  const [autoPlay, setAutoPlay] = useState(false) //useQueryParam('autoPlay', BooleanParam)
  const [codeQuery, setCodeQuery] = useQueryParam('code', StringParam) //useQueryParam('code', StringParam)
  const [code, setCode] = useState(props.value || '')
  const autoPlayInput = useRef(null)
  const [shareOpen, setSharingOpen] = useState(false)
  const location = useLocation()
  const language = useLanguage()
  const shareURL = `${location.origin}${
    defaultLanguage === language ? '' : '/' + language
  }/rpg/editor?${props.codeQueryParam}=${encodeURIComponent(code)}${
    autoPlay === true ? '&autoPlay=1' : ''
  }`
  const consoleMode = !!props.consoleMode
  const disableAutoRun = !!props.disableAutoRun
  const vert = !!props.vertical
  const [output, setOutput] = useState(
    !disableAutoRun && code ? getOutput(code, consoleMode) : null
  )
  if (!disableAutoRun) {
    useEffect(() => {
      setOutput(getOutput(code, consoleMode))
    }, [code])
  }

  useEffect(() => {
    if (codeQuery) {
      setCode(getTemplate(codeQuery))
    }
  }, [codeQuery])
  // const { width, height } = useWindowDimensions()
  // const [dimensionPopupClosed, setDimensionPopupClosed] = useState(false)
  /*{!dimensionPopupClosed && height > width ? (
        <span className={popup}>
          <span
            className={icon + ' ' + close}
            onClick={() => {
              setDimensionPopupClosed(true)
            }}>
            ❌
          </span>
          Try turning your device sideways
        </span>
      ) : null} */
  return (
    <div
      className={
        (vert === true ? vertical + ' ' : '') +
        (typeof props.className == 'string' ? props.className + ' ' : '') +
        sandbox
      }>
      {shareOpen ? (
        <span className={sharePopup}>
          Your Sharing URL:
          <Link to={shareURL}>Right Click and Copy This Link</Link>
          <span
            className={icon + ' ' + close}
            onClick={() => {
              setSharingOpen(false)
            }}>
            ❌
          </span>
          <div className={settings}>
            <h2>Settings</h2>
            <span className={autoPlay}>
              Autoplay{' '}
              <input
                ref={autoPlayInput}
                onChange={() => {
                  setAutoPlay(!autoPlay)
                }}
                checked={autoPlay}
                type="checkbox"
              />
            </span>
          </div>
        </span>
      ) : null}
      <h2 className={mainTitle}>
        {disableAutoRun ? (
          <FontAwesomeIcon
            className={icon}
            onClick={() => {
              setOutput(getOutput(code, consoleMode))
            }}
            title="Run"
            icon={faPlayCircle}
          />
        ) : null}
        <span className={mode}>{consoleMode === true ? 'Terminal' : 'Expression Evaluator'}</span>
        {props.readOnly === true ? ' (Read Only)' : null}
        {props.savable === true ? (
          <>
            <FontAwesomeIcon
              onClick={() => {
                if (!code) return alert('Your editor is empty, cannot download!')
                downloadFile('my-game.js', code)
              }}
              className={icon + ' ' + download}
              title="Download App"
              icon={faDownload}
            />
            <div title="Upload App" className={upload}>
              <input
                type="file"
                accept="text/javascript"
                onChange={event => {
                  const file = event.target.files[0]
                  if (file) {
                    const reader = new FileReader()
                    reader.readAsText(file)
                    reader.onload = loadEvent => {
                      setCode(loadEvent.target.result)
                    } // desired file content
                    reader.onerror = console.error
                  }
                }}
              />
              <FontAwesomeIcon className={icon} icon={faUpload} />
            </div>
          </>
        ) : null}
        {props.noReset !== true ? (
          <FontAwesomeIcon
            className={icon}
            title="Reset"
            onClick={() => {
              if (codeQuery) {
                setCode(getTemplate(codeQuery))
              } else {
                setCode(props.value || '')
              }
            }}
            icon={faTimesCircle}
          />
        ) : null}
      </h2>
      <noscript>Please Enable JavaScript</noscript>
      <div className={(vert ? vertical + ' ' : '') + inner}>
        <div className={'section ' + section}>
          <h2 className={title}>Code Input</h2>
          <AceEditor
            maxLines={Infinity}
            className={aceEditor}
            mode="javascript"
            theme="ambiance"
            readOnly={props.readOnly === true}
            value={code}
            onChange={newCode => {
              setCode(newCode)
              if (props.disableAutoRun !== true) {
                setOutput(getOutput(newCode, props.consoleMode))
              }
            }}
          />
        </div>
        <div className={'section ' + section}>
          <h2 className={title + ' ' + mode}>
            {props.consoleMode === true ? 'Console' : 'Output'}
          </h2>
          {output === null ? (
            <span className={outputSpan}>
              Run the program to see your <Output />
            </span>
          ) : (
            output
          )}
        </div>
      </div>
    </div>
  )
}

function getOutput(code, consoleMode) {
  if (code.length > 0) {
    return consoleMode === true ? getConsoleOutput(code) : getEvalOutput(code)
  } else {
    return <span className={outputSpan}>Type something to see the evaluated output</span>
  }
}

function getConsoleOutput(code) {
  const oldLog = console.log
  const logOutput = []
  console.log = (...args) => {
    if (args.length > 1) {
      logOutput.push(args)
    } else {
      logOutput.push(args[0])
    }
  }
  try {
    eval(code)
    console.log = oldLog
    if (logOutput.length < 1)
      return (
        <span className={outputSpan}>Try logging something to the console to see some output</span>
      )
    return (
      <AceEditor
        maxLines={Infinity}
        className={aceEditor + ' ' + outputSpan}
        mode="javascript"
        height="auto"
        theme="ambiance"
        readOnly
        value={logOutput.map(value => inspect(value)).join(';\n')}
      />
    )
  } catch (err) {
    console.log = oldLog
    return <span className={outputSpan + ' ' + error}>{String(err)}</span>
  }
}

function getEvalOutput(code) {
  try {
    const output = eval(code)
    let outputSource = inspect(output)
    return (
      <AceEditor
        maxLines={Infinity}
        className={aceEditor + ' ' + outputSpan}
        mode="javascript"
        theme="ambiance"
        readOnly
        value={outputSource}
      />
    )
  } catch (err) {
    return <span className={outputSpan + ' ' + error}>{String(err)}</span>
  }
}

export default CodeSandbox
