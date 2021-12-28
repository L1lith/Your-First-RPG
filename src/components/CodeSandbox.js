import { Component, Fragment, useState, useEffect, useRef } from 'react'
import AceEditor from './AceEditor'
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
  aceEditor
} from '../styles/CodeSandbox.module.scss'
import { inspect } from 'util'
import { useRouter, withRouter } from 'next/router'
import Output from './Dictionary/Output'

function CodeSandbox(props) {
  const router = useRouter()
  const [shareAutoPlay, setShareAutoPlay] = useState(
    router.query.hasOwnProperty('autoPlay') ? router.query.autoPlay : null
  )
  const autoPlayInput = useRef(null)
  const queryCode = router.query.code
  const autoPlayQuery = router.query.autoPlay
  const [code, setCode] = useState(
    router.query.hasOwnProperty(props.codeQueryParam)
      ? router.query[props.codeQueryParam]
      : props.value || ''
  )
  const shareURL = `${router.basePath}/rpg/editor?${props.codeQueryParam}=${encodeURIComponent(
    code
  )}${shareAutoPlay === true ? '&autoPlay=1' : ''}`
  const vert = !!props.vertical
  const [output, setOutput] = useState(
    props.disableAutoRun === true ? null : getOutput(code, props.consoleMode)
  )
  useEffect(() => {
    f
    if (!queryCode) return
    setCode(queryCode)
  }, [queryCode])
  useEffect(() => {
    if (shareAutoPlay !== null) return
    if (!autoPlayQuery) return
    setShareAutoPlay(autoPlayQuery === '1')
  }, [autoPlayQuery])
  useEffect(() => {
    if (autoPlayQuery === '1') {
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
      {typeof shareURL == 'string' ? (
        <span className={sharePopup}>
          Your Sharing URL:
          <a href={shareURL}>Right Click and Copy This Link</a>
          <span
            className={icon + ' ' + close}
            onClick={() => {
              setShareURL(null)
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
                  setShareAutoPlay(!shareAutoPlay)
                }}
                checked={shareAutoPlay}
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
            }}>
            ❌
          </span>
        ) : null}
        {props.hasOwnProperty('codeQueryParam') == true ? (
          <Fragment>
            <span title="Share" className={icon}>
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
            width="50%"
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
    return (
      <span className={styles.output + ' ' + styles.empty}>
        Type something to see the evaluated output
      </span>
    )
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
        <span className={styles.output + ' ' + styles.empty}>
          Try logging something to the console to see some output
        </span>
      )
    return (
      <AceEditor
        maxLines={Infinity}
        className={styles['ace-editor'] + ' ' + styles.output + ' ' + styles.valid}
        width="50%"
        mode="javascript"
        height="auto"
        theme="ambiance"
        readOnly
        value={logOutput.map(value => inspect(value)).join(';\n')}
      />
    )
  } catch (err) {
    console.log = oldLog
    return <span className={styles.output + ' ' + styles.error}>{inspect(err)}</span>
  }
}

function getEvalOutput(code) {
  try {
    const output = eval(code)
    let outputSource = inspect(output)
    return (
      <AceEditor
        maxLines={Infinity}
        className={styles['ace-editor'] + ' output valid'}
        width="50%"
        mode="javascript"
        theme="ambiance"
        readOnly
        value={outputSource}
      />
    )
  } catch (err) {
    return <span className={styles.output + ' ' + styles.error}>{inspect(err)}</span>
  }
}

export default withRouter(CodeSandbox)
