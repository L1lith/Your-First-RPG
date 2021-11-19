import BooleanGame from '..'

export default () => {
  return (
    <BooleanGame
      shapes={['▢', '⧍', '○', '◊']}
      colors={['#ffccfb', '#00ff00', '#0080b3', '#fdff80']}
      title={'Level 3'}
      size={5}
    />
  )
}
