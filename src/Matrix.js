import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: ""
    }
  }

  // write a method that takes in a single argument of a hex color string (i.e. '#fff') and sets the selected color to that
  setSelectedColor = (color) => {
    this.setState({
      selectedColor: color
    })
    console.log(`Selected Color is now ${this.state.selectedColor}`)
  }

  newCellColor = () => {
    return this.state.selectedColor
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} newCellColor={this.newCellColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
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
