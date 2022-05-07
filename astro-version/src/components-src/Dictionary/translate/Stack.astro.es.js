module.exports = new Map([
  [
    /(?<=definition=['|"]).*(?=['|"][\s]*[\}]?[\s]*(\n|>))/g,
    'Su "stack" (como un pila) es la lista de software / aplicaciones que usa para codificar.'
  ]
])
