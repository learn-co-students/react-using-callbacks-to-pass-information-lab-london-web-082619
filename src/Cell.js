import React, { Component } from 'react';

console.log(this.props)

export default class Cell extends Component {

  state = {
      color: this.props.color
  }
  
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }

  render() {
    console.log(this.state.color)
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
}
