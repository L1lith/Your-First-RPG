function deepGimp(target = window) {
  Object.entries(window).forEach((key, value) => {
    if (typeof value == 'function') {
      if (isNative(value)) {
        window[key] = () => {}
      }
    } else if (typeof value == 'object' && value !== null) {
      deepGimp(value)
    }
  })
}

function isNative(func) {
  if (typeof func != 'function') throw new Error('expected a function')
  return
}

export default deepGimp
