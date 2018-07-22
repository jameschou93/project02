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
          <img src={this.props.business.img_url} alt="cafe-icon" height="42" width="42" />
          <p onClick={this.handleClick} >{this.props.business.city}</p>
          <p onClick={this.handleClick} >{this.props.business.address}</p>
      </div>
    )
  }
}

export default Business
