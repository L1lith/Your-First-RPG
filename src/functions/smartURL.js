import { useLocation } from '@reach/router'

function smartURL(url) {
  let error = null
  try {
    return new URL(url)
  } catch (err1) {
    if (err1.message.includes('not a valid URL') || err1.message.includes('Invalid URL')) {
      error = err1
    } else {
      throw err1
    }
  }
  const location = useLocation()
  try {
    return new URL(url, location.origin)
  } catch (err2) {
    throw error
  }
}

export default smartURL
