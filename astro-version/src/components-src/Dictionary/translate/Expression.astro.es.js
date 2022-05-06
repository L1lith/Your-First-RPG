module.exports = new Map([
  [
    /(?<=definition=[{]?['|"]).*(?=['|"][}]?[\s]*\n)/g,
    'Una "expression" es un fragmento de código que se puede reducir a un solo valor, como una ecuación matemática'
  ]
])
