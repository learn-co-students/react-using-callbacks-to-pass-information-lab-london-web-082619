import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state = {
    selectedColor: '#FFF'
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor

    })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor}/>)
  )
  // Aside: Remember that when using arrow functions, you can use parentheses instead of curly braces to implicitly return a value.

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )
  // Aside: Remember that when using arrow functions, you can use parentheses instead of curly braces to implicitly return a value.

  

  render() {
    console.log(this.state.selectedColor)
    
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: chromeBoi
}
