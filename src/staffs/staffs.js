import React, { Component } from 'react'
import Staff from './staff'
import Child from './child'

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
  delStaff = (index, e) => {
    const staffs = Object.assign([], this.state.staffs)
    staffs.splice(index, 1)
    this.setState({staffs:staffs})
  }



  render() {
    return (
      <div>
      <ul>
      {this.state.staffs.map((staff, index) => {
        return(
          <div>
            <Staff name={staff.name} pet={staff.pet} delEvent={this.delStaff.bind(this, index)}></Staff>
          </div>
        )
      })}
      </ul>
      <button onClick={this.donkify}>Do something</button>
      <input type="text" onChange={this.changeName}/>

        <div> {this.state.name} </div>
      </div>
    )
  }
}

export default Staffs
