module.exports = new Map([
  [
    /(?<=definition=[{]?['|"]).*(?=['|"][}]?[\s]*\n)/g,
    'Una "function" es un fragmento de código reutilizable con su propio conjunto de entradas, reglas y salidas. ¡Es como un modelo lógico en miniatura que nos ahorra tiempo!'
  ]
])
