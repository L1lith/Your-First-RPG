import { Component, Fragment, useState } from 'react'
import AceEditor from './AceEditor'
import './CodeSandbox.scss'
import { inspect } from 'util'
import autoBind from 'auto-bind'
import { useRouter, useEffect } from 'next/router'

function CodeSandbox(props) {
  const [shareURL, setShareURL] = useState(null)
  const router = useRouter()
  const [code, setCode] = useState(
    router.query.hasOwnProperty(props.codeQueryParam)
      ? router.query[props.codeQueryParam]
      : props.value || ''
  )
  const [output, setOutput] = useState(
    props.disableAutoRun === true ? null : getOutput(code, props.consoleMode)
  )
  useEffect(() => {
    if (router.query.hasOwnProperty(props.codeQueryParam)) {
      const queryParam = router.query[props.codeQueryParam]
      if (code !== queryParam) {
        setCode(queryParam)
      }
    }
  })
  return (
    <div className={'sandbox' + (props.hasOwnProperty('className') ? ' ' + props.className : '')}>
      {typeof shareURL == 'string' ? (
        <span className="share-popup">
          Your Sharing URL:
          <a className="url" href={shareURL}>
            Right Click and Copy This Link
          </a>
          <span
            className="icon close"
            onClick={() => {
              setShareURL(null)
            }}>
            ❌
          </span>
        </span>
      ) : null}
      <h2 className="main-title">
        {props.disableAutoRun === true ? (
          <span
            title="Run"
            className="icon play"
            onClick={() => {
              setOutput(getOutput(code, props.consoleMode))
            }}>
            ▶
          </span>
        ) : null}
        <h2>JavaScript {props.consoleMode === true ? 'Terminal' : 'Evaluator'}</h2>
        {props.readOnly === true ? ' (Read Only)' : null}
        {props.noReset !== true ? (
          <span
            title="Reset"
            className="icon reset"
            onClick={() => {
              setCode(
                router.query.hasOwnProperty(props.codeQueryParam)
                  ? router.query[props.codeQueryParam]
                  : defaultCode
              )
            }}>
            ❌
          </span>
        ) : null}
        {props.hasOwnProperty('codeQueryParam') == true ? (
          <Fragment>
            <span
              title="Share"
              className="icon share"
              onClick={() => {
                setShareURL(
                  `${router.basePath}/rpg/editor?${codeQueryParam}=${encodeURIComponent(code)}`
                )
              }}>
              ☁️
            </span>
          </Fragment>
        ) : null}
      </h2>

      <div className="titles">
        <h2 className="title">Code Input</h2>
        <h2 className="title">{props.consoleMode === true ? 'Console' : 'Output'}</h2>
      </div>
      <div className="inner">
        <AceEditor
          width="50%"
          height="100%"
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
          <span className="output empty">Run the program to see your output</span>
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
    return <span className="output empty">Type something to see the evaluated output</span>
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
        <span className="output empty">
          Try logging something to the console to see some output
        </span>
      )
    return (
      <AceEditor
        className="output valid"
        width="50%"
        height="100%"
        mode="javascript"
        theme="ambiance"
        readOnly
        value={logOutput.map(value => inspect(value)).join(';\n')}
      />
    )
  } catch (err) {
    console.log = oldLog
    return <span className="output error">{inspect(err)}</span>
  }
}

function getEvalOutput(code) {
  try {
    const output = eval(code)
    let outputSource = inspect(output)
    return (
      <AceEditor
        className="output valid"
        width="50%"
        height="100%"
        mode="javascript"
        theme="ambiance"
        readOnly
        value={outputSource}
      />
    )
  } catch (err) {
    return <span className="output error">{inspect(err)}</span>
  }
}

export default CodeSandbox
