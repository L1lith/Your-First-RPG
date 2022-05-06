module.exports = new Map([
  [
    /(?<=definition=[{]?['|"]).*(?=['|"][}]?[\s]*\{)/g,
    'Tu "input" son datos que entran en tu modelo lógico'
  ]
])
