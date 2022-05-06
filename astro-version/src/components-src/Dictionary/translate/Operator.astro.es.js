module.exports = new Map([
  [
    /(?<=definition=['|"]).*(?=['|"][\s]*(\n|{|>))/g,
    'Un "operador" es una acción en la codificación que ingresa y genera datos, como comparar dos valores booleanos o sumar dos números.'
  ]
])
