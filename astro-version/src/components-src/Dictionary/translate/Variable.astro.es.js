module.exports = new Map([
  [
    /(?<=definition=['|"]).*(?=['|"][\s]*(\n|{|>))/g,
    'Una "variable" contiene cualquier tipo de datos que desee. Tienen etiqueta y valor.'
  ]
])
