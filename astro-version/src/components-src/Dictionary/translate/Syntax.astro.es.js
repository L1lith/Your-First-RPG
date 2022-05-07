module.exports = new Map([
  [
    /(?<=definition=['|"]).*(?=['|"][\s]*(\n|{|>))/g,
    'La "syntax" es la gramática (o reglas) del lenguaje de programación.'
  ]
])
