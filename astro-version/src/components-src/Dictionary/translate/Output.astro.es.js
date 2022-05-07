module.exports = new Map([
  [
    /(?<=definition=[{]?['|"]).*(?=['|"][\s]*[}]?[\s]*(\n|>|{))/g,
    'Tu "output" es el resultado de tu modelo lógico'
  ]
])
