module.exports = new Map([
  [
    /(?<=definition=[{]?['|"]).*(?=['|"][\s]*[}]?[\s]*(\n|>|{))/g,
    '"RPG" significa Role Playing Game, que es una especie de juego de aventuras.'
  ]
])
