import BooleanGame from '..'

export default () => {
  const notColors = Math.random() > 0.5
  const notShapes = !notColors
  return (
    <BooleanGame
      title={'Level 2'}
      size={3}
      rulesOptions={{ allowNots: true, notColors, notShapes }}
    />
  )
}
