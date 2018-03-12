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

  donkify = () => {
    const newState = this.state.staffs.map((staff) => {
      const tempStaff = staff;
      tempStaff.pet = "donkey";
      return tempStaff
    })

    this.setState({newState})
  }

  changeName = (event) => {
    this.setState({
      name:event.target.value
    })
  }
  changeName2 = (event) => {
    this.setState({
      name:event
    })
  }



  render() {
    return (
      <div>
      <button onClick={this.donkify}>Do something</button>
      <input type="text" onChange={this.changeName}/>
        <Staff name={this.state.staffs[0].name}>{this.state.staffs[0].pet}</Staff>
        <button onClick={this.changeName2.bind(this, this.state.staffs[0].pet)}> bind </button>
        <Staff name={this.state.staffs[1].name}>{this.state.staffs[1].pet}</Staff>
        <Staff name={this.state.staffs[2].name}>{this.state.staffs[2].pet}</Staff>
        <div> {this.state.name} </div>
      </div>
    )
  }
}

export default Staffs
