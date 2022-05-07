module.exports = new Map([
  [
    /(?<=definition=[{]?['|"]).*(?=['|"][\s]*[}]?[\s]*(\n|>|{))/g,
    'El "software" es cualquier proyecto que codificas. Esto puede ser una aplicación o un sitio web o cualquier otra cosa que puedas imaginar.'
  ]
])
