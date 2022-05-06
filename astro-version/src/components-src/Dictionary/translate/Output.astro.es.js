module.exports = new Map([
  [
    /(?<=definition=['|"]).*(?=['|"][\s]*(\n|{|>))/g,
    'Tu "output" es el resultado de tu modelo lógico'
  ]
])
