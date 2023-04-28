// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomNumberGenerater = () => {
    const randomNumber = Math.random() * 100
    const number = Math.ceil(randomNumber)
    this.setState({count: number})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="gen-btn"
            onClick={this.randomNumberGenerater}
          >
            Generate
          </button>
          <p className="counter">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
