import { Component, Fragment, useState, useEffect } from 'react'
import AceEditor from './AceEditor'
import styles from '../styles/CodeSandbox.module.scss'
import { inspect } from 'util'
import autoBind from 'auto-bind'
import { useRouter, withRouter } from 'next/router'

function CodeSandbox(props) {
  const [shareURL, setShareURL] = useState(null)
  const router = useRouter()
  const queryCode = router.query.code
  const [code, setCode] = useState(
    router.query.hasOwnProperty(props.codeQueryParam)
      ? router.query[props.codeQueryParam]
      : props.value || ''
  )
  const [output, setOutput] = useState(
    props.disableAutoRun === true ? null : getOutput(code, props.consoleMode)
  )
  let hasAppliedQuery = false
  useEffect(() => {
    if (!queryCode) return
    setCode(queryCode)
  }, [queryCode])

  return (
    <div className={styles.sandbox}>
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
        <h2 className={styles.mode}>
          JavaScript {props.consoleMode === true ? 'Terminal' : 'Evaluator'}
        </h2>
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
                  )}`
                )
              }}>
              ☁️
            </span>
          </Fragment>
        ) : null}
      </h2>
      <noscript>Please Enable JavaScript</noscript>
      <div className={styles.titles}>
        <h2 className={styles.title}>Code Input</h2>
        <h2 className={styles.title + ' ' + styles.mode}>
          {props.consoleMode === true ? 'Console' : 'Output'}
        </h2>
      </div>
      <div className={styles.inner}>
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
        {output === null ? (
          <span className={styles.output + ' ' + styles.empty}>
            Run the program to see your output
          </span>
        ) : (
          output
        )}
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
