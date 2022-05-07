module.exports = new Map([
  [
    /(?<=definition=['|"]).*(?=['|"][\s]*\n)/g,
    'Un momento "aha" es el sentimiento satisfactorio cuando finalmente entiendes algo.'
  ],
  [
    /(?<=\{[\s]*Astro\.props\.children[\s]*\|\|[\s]*('|")).*(?=['|"][\s]*[}]?[\s]*\n)/g,
    'momento "aha"'
  ]
])
