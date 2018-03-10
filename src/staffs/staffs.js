import React, { Component } from 'react'
import Staff from './staff'

class Staffs extends Component {
  state = {
    staffs: [
      {name: "Rocket", pet: 'Racoon'},
      {name: "Liono", pet: 'Lion'},
      {name: "Moses", pet: 'Everything'}
    ]
  }

  render() {
    return (
      <div>
        <Staff name={this.state.staffs[0].name}>{this.state.staffs[0].pet}</Staff>
        <Staff name={this.state.staffs[1].name}>{this.state.staffs[1].pet}</Staff>
        <Staff name={this.state.staffs[2].name}>{this.state.staffs[2].pet}</Staff>
      </div>
    )
  }
}

export default Staffs
