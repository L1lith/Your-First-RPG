module.exports = new Map([
  [
    /(?<=definition=['|"]).*(?=['|"][\s]*\n)/g,
    'Un "boolean" es algo que es verdadero o falso, como una pregunta de sí o no.'
  ]
])
