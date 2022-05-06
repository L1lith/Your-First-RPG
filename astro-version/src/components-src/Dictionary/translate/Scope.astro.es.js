module.exports = new Map([
  [
    /(?<=definition=['|"]).*(?=['|"][\s]*(\n|{|>))/g,
    'El "scope" es el tamaño de las funciones y tareas de un proyecto.'
  ]
])
