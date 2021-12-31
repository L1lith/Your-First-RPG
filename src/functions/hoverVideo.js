function hoverVideo() {
  let mouseOver = false
  const output = {}
  output.onMouseOver = event => {
    mouseOver = true
    event.target.play()
  }
  output.onMouseOut = () => {
    mouseOver = false
  }
  output.onEnded = event => {
    if (mouseOver === true) event.target.play()
  }
  return output
}

export default hoverVideo
