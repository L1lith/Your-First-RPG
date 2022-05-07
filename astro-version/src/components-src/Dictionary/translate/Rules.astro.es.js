module.exports = new Map([
  [
    /(?<=definition=[{]?['|"]).*(?=['|"][\s]*[}]?[\s]*(\n|>|{))/g,
    'Esta es la "lógica" o el "código" de su modelo lógico. Las "rules" se utilizan para decidir cuál es la salida de nuestro modelo en función de la entrada'
  ]
])
