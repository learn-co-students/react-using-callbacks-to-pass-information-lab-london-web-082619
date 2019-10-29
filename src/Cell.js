import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  // Add event listener to change color to selected color on click

  changeCellColor = () => {
    let newColor = this.props.newCellColor();
    this.setState({
      color: newColor
    })
    console.log(`Color changed to ${this.state.color}`)
  }


  render() {
    return (
      <div 
        className="cell" 
        style={{backgroundColor: this.state.color}} 
        onClick={() => this.changeCellColor()}
      >
      </div>
    )
  }
  
}
