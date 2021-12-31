function isDev() {
  try {
    return process && process.env.NODE_ENV === 'development'
  } catch (error) {
    return false
  }
}

export default isDev
