import { Component, Fragment, useState, useEffect, useRef } from 'react'
import AceEditor from './AceEditor'
import styles from '../styles/CodeSandbox.module.scss'
import { inspect } from 'util'
import autoBind from 'auto-bind'
import { useRouter, withRouter } from 'next/router'
import Output from './Dictionary/Output'

function CodeSandbox(props) {
  const [shareURL, setShareURL] = useState(null)
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
  const vertical = !!props.vertical
  const [output, setOutput] = useState(
    props.disableAutoRun === true ? null : getOutput(code, props.consoleMode)
  )
  let hasAppliedQuery = false
  useEffect(() => {
    if (!queryCode) return
    setCode(queryCode)
  }, [queryCode])
  useEffect(() => {
    if (shareAutoPlay !== null) return
    if (!autoPlayQuery) return
    setShareAutoPlay(autoPlayQuery === '1')
  }, [autoPlayQuery])
  // let hasAutorun = false
  // useEffect(() => {
  //   if (shareAutoPlay === null || !code) return
  //   setOutput(getOutput(code, props.consoleMode))
  // }, [shareAutoPlay, code])

  return (
    <div
      className={
        (vertical === true ? styles.vertical + ' ' : '') +
        (typeof props.className == 'string' ? props.className + ' ' : '') +
        styles.sandbox
      }>
      {typeof shareURL == 'string' ? (
        <span className={styles['share-popup']}>
          Your Sharing URL:
          <a className={styles.url} href={shareURL}>
            Right Click and Copy This Link
          </a>
          <span
            className={styles.icon + ' ' + styles.close}
            onClick={() => {
              setShareURL(null)
            }}>
            ❌
          </span>
          <div className={styles.settings}>
            <h2>Settings</h2>
            <span className={styles['auto-play']}>
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
      <h2 className={styles['main-title']}>
        {props.disableAutoRun === true ? (
          <span
            title="Run"
            className={styles.icon}
            onClick={() => {
              setOutput(getOutput(code, props.consoleMode))
            }}>
            ▶
          </span>
        ) : null}
        <span className={styles.mode}>
          {props.consoleMode === true ? 'Terminal' : 'Expression Evaluator'}
        </span>
        {props.readOnly === true ? ' (Read Only)' : null}
        {props.noReset !== true ? (
          <span
            title="Reset"
            className={styles.icon}
            onClick={() => {
              setCode('')
            }}>
            ❌
          </span>
        ) : null}
        {props.hasOwnProperty('codeQueryParam') == true ? (
          <Fragment>
            <span
              title="Share"
              className={styles.icon}
              onClick={() => {
                setShareURL(
                  `${router.basePath}/rpg/editor?${props.codeQueryParam}=${encodeURIComponent(
                    code
                  )}${shareAutoPlay ? '&autoPlay=1' : ''}`
                )
              }}>
              ☁️
            </span>
          </Fragment>
        ) : null}
      </h2>
      <noscript>Please Enable JavaScript</noscript>
      <div className={(vertical ? styles.vertical + ' ' : '') + styles.inner}>
        <div className={'section ' + styles.section}>
          <h2 className={styles.title}>Code Input</h2>
          <AceEditor
            width="50%"
            maxLines={Infinity}
            className={styles['ace-editor']}
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
        <div className={'section ' + styles.section}>
          <h2 className={styles.title + ' ' + styles.mode}>
            {props.consoleMode === true ? 'Console' : 'Output'}
          </h2>
          {output === null ? (
            <span className={styles.output + ' ' + styles.empty}>
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
