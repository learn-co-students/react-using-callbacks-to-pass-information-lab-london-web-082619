import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  changeColor = () => {
    console.log(`this is ${this.props.handleClick()}`)
    let newColor  = this.props.handleClick()
    this.setState({
      color: newColor
    })
  }


  
  render() {
    return (
      <div 
        className="cell" 
        style={{backgroundColor: this.state.color}}
        onClick={() => this.changeColor()}>
      </div>
    )
  }
  
}
