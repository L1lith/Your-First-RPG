import inspect from '../functions/inspect'
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
  valid
} from '../styles/CodeSandbox.module.scss'
import AceEditor from './AceEditor'
import Output from './Dictionary/Output'
import Link from './TranslatedLink'
import { useLocation } from '@reach/router'
import { Component, Fragment, useState, useEffect, useRef } from 'react'
import { useQueryParam, BooleanParam, StringParam } from 'use-query-params'

function CodeSandbox(props) {
  const [autoPlayQuery] = useQueryParam('autoPlay', BooleanParam)
  const [autoPlay, setAutoPlay] = useState(false) //useQueryParam('autoPlay', BooleanParam)
  const [codeInput, setCodeQuery] = useState(props.value || '') //useQueryParam('code', StringParam)
  const autoPlayInput = useRef(null)
  const [code, setCode] = useState(codeInput || props.value || '')
  const [shareOpen, setSharingOpen] = useState(false)
  const location = useLocation()
  const shareURL = `${location.origin}/rpg/editor?${props.codeQueryParam}=${encodeURIComponent(
    code
  )}${autoPlay === true ? '&autoPlay=1' : ''}`
  const vert = !!props.vertical
  const [output, setOutput] = useState(
    props.disableAutoRun === true ? null : getOutput(code, props.consoleMode)
  )
  // useEffect(() => {
  //   if (!queryCode) return
  //   setCode(queryCode)
  // }, [queryCode])
  // useEffect(() => {
  //   if (shareAutoPlay !== null) return
  //   if (!autoPlayQuery) return
  //   setShareAutoPlay(autoPlayQuery === '1')
  // }, [autoPlayQuery])
  useEffect(() => {
    if (autoPlayQuery) {
      setOutput(getOutput(code, props.consoleMode))
    }
  }, [autoPlayQuery])
  // let hasAutorun = false
  // useEffect(() => {
  //   if (shareAutoPlay === null || !code) return
  //   setOutput(getOutput(code, props.consoleMode))
  // }, [shareAutoPlay, code])

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
        {props.disableAutoRun === true ? (
          <span
            title="Run"
            className={icon}
            onClick={() => {
              setOutput(getOutput(code, props.consoleMode))
            }}>
            ▶
          </span>
        ) : null}
        <span className={mode}>
          {props.consoleMode === true ? 'Terminal' : 'Expression Evaluator'}
        </span>
        {props.readOnly === true ? ' (Read Only)' : null}
        {props.noReset !== true ? (
          <span
            title="Reset"
            className={icon}
            onClick={() => {
              setCode('')
              setCodeQuery('')
            }}>
            ❌
          </span>
        ) : null}
        {props.hasOwnProperty('codeQueryParam') == true ? (
          <Fragment>
            <span
              title="Share"
              onClick={() => {
                setSharingOpen(true)
              }}
              className={icon}>
              ☁️
            </span>
          </Fragment>
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
              setCodeQuery(newCode)
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
    return <span className={outputSpan + ' ' + error}>{inspect(err)}</span>
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
    return <span className={outputSpan + ' ' + error}>{inspect(err)}</span>
  }
}

export default CodeSandbox
