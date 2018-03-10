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

  takeme = () => {
    const newState = this.state.staffs.map((staff) => {
      const tempStaff = staff;
      tempStaff.pet = "donkey";
      return tempStaff
    })

    this.setState({newState})
  }

  render() {
    return (
      <div>
      <button onClick={this.takeme}>Do something</button>
        <Staff name={this.state.staffs[0].name}>{this.state.staffs[0].pet}</Staff>
        <Staff name={this.state.staffs[1].name}>{this.state.staffs[1].pet}</Staff>
        <Staff name={this.state.staffs[2].name}>{this.state.staffs[2].pet}</Staff>
      </div>
    )
  }
}

export default Staffs
