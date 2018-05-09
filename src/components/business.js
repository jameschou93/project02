import React, {Component} from 'react'

class Business extends Component {
  handleClick = () => {
    this.props.onClick(this.props.business.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.business.id)
  }
  
  render () {
    return(
      <div className="shop-block" key={this.props.business.id}>
      <span className="deleteButton" onClick={this.handleDelete}> x </span>
        <h2 onClick={this.handleClick}> {this.props.business.name} </h2>
          <ul>
            <li onClick={this.handleClick} >{this.props.business.city}</li>
            <li onClick={this.handleClick} >{this.props.business.address}</li>
          </ul>
      </div>
    )
  }
}

export default Business
