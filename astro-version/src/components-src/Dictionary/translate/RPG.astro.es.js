module.exports = new Map([
  [
    /(?<=definition=['|"]).*(?=['|"][\s]*(\n|{|>))/g,
    '"RPG" significa Role Playing Game, que es una especie de juego de aventuras.'
  ]
])