import { Component } from 'react'
import { sanitize } from 'sandhands'
import initializeMatrix from '../functions/initializeMatrix'

const propsFormat = {
  dimensions: {
    _: [{ _: Number, min: 1, finite: true }],
    minLength: 1,
    maxLength: 3
  }
}

class SquareGame extends Component {
  constructor(props) {
    super(props)
    sanitize(props, propsFormat)
    const dimensions = [
      this.props.dimensions[0],
      this.props.dimensions[0] || this.props.dimensions[1], // If only argument is given square it,
      this.props.dimensions[0] || this.props.dimensions[1] || this.props.dimensions[2]
    ]
    this.state = {
      board: initializeMatrix(dimensions, null),
      dimensions
    }
  }
  render() {
    //console.log(this.state.board);
    return <p>{this.state.dimensions.join(', ')}</p>
  }
}

export default SquareGame
