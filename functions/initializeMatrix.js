import { sanitize } from 'sandhands'

const dimensionsFormat = {
  _: Number,
  min: 1,
  finite: true
}

const NONE = Symbol('none')

function initializeMatrix(dimensions = 1, initialValue = NONE) {
  sanitize(dimensions, dimensionsFormat)
  let currentMatrix = new Array(dimensions)
  for (let x = 0; x < dimensions; x++) {
    currentMatrix[x] = new Array(dimensions)
    if (initialValue !== NONE) {
      for (let y = 0; y < dimensions; y++) {
        currentMatrix[x][y] = initialValue
      }
    }
  }
  return currentMatrix
}

export default initializeMatrix
