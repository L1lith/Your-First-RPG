import randomBetween from './randomBetween'
import ntc from 'ntcjs'

function generateRules(
  colors = ['red', 'green', 'blue'],
  shapes = ['square', 'triangle'],
  options = {}
) {
  let { allowNots = true, minColors = 1, minShapes = 1, notColors, notShapes } = options
  let allowedColors = randomSubset(colors, minColors)
  let allowedShapes = randomSubset(shapes, minShapes)
  //console.log(notColors, notShapes);
  if (notShapes === true && allowedShapes.length >= shapes.length) {
    allowedShapes = allowedShapes.slice(0, shapes.length - 1)
  }
  if (
    //allowedShapes.length > shapes.length / 2 &&
    allowNots === true &&
    allowedShapes.length < shapes.length - 1 &&
    notShapes !== false &&
    (notShapes === true || Math.random() > 0.5) // Random chance of inverting it
  ) {
    allowedShapes = shapes.filter(shape => !allowedShapes.includes(shape))
    notShapes = true
  }
  if (notColors === true && allowedColors.length >= colors.length) {
    allowedColors = allowedColors.slice(0, shapes.length - 1)
  }
  if (
    //allowedColors.length > colors.length / 2 &&
    allowNots === true &&
    allowedColors.length < colors.length - 1 &&
    notColors !== false &&
    (notColors === true || Math.random() > 0.5) // Random chance of inverting it
  ) {
    allowedColors = colors.filter(color => !allowedColors.includes(color))
    notColors = true
  }

  const colorsDescription =
    (notColors ? 'not (' : '') +
    allowedColors.map(color => ntc.name(color)[1]).join(' or ') +
    (notColors ? ')' : '')

  const shapesDescription =
    (notShapes ? 'not (' : '') + allowedShapes.join(' or ') + (notShapes ? ')' : '')

  return {
    allowedColors,
    allowedShapes,
    notShapes,
    notColors,
    colorsDescription,
    shapesDescription
  }
}

function randomSubset(possible, minResults = 1) {
  const output = possible.filter(() => Math.random() > 0.5)
  while (output.length < minResults && possible.length > output.length) {
    const nowPossible = possible.filter(value => !output.includes(value))
    const newColor = nowPossible[randomBetween(0, nowPossible.length - 1)]
    output.push(newColor)
  }

  return output
}

export default generateRules
