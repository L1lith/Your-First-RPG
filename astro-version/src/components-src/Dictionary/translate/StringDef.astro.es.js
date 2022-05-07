module.exports = new Map([
  [
    /(?<=definition=[{]?['|"]).*(?=['|"][\s]*[}]?[\s]*(\n|>|{))/g,
    'Una "cadena" es un fragmento de texto humano que su computadora sabe que no es código, pero aún puede usarse en su código'
  ]
])
