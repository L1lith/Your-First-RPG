import { useEffect, useState } from 'react'

function useSaverEval(raw) {
  const [output, setOutput] = useState(null)
  const setInput = raw => {}
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sandbox/evaluator.js').then(
          registration => {
            console.log('Service Worker registration successful with scope: ', registration.scope)
          },
          err => {
            console.log('Service Worker registration failed: ', err)
            setOutput(eval(raw))
          }
        )
      })
    } else {
      setOutput(eval(raw))
    }
  })
  return [output, setInput]
}

export default useSaferEval
