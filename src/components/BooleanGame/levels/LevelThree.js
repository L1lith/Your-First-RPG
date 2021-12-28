import BooleanGame from '..'

export default () => {
  const notColors = Math.random() > 0.5
  const notShapes = Math.random() > 0.5
  //console.log('a', notColors, notShapes)
  return (
    <BooleanGame
      shapes={['▢', '⧍', '○', '◊']}
      colors={['#ffccfb', '#00ff00', '#0080b3', '#fdff80']}
      title={'Level 3'}
      size={5}
      rulesOptions={{ allowNots: true, notColors, notShapes }}
    />
  )
}
