import React, {Component} from 'react'
import axios from 'axios'

class BusinessForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.business.name,
      address: this.props.business.address,
      city: this.props.business.city,
      zip: this.props.business.zip,
      wifi: this.props.business.wifi,
      phone: this.props.business.phone,
      bathroom: this.props.business.bathroom,
      img_url: this.props.business.img_url,
      notification: ''
    }
  }

  handleInput = (e) => {
    this.props.resetNotificaiton()
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const business = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      img_url: this.state.img_url
    }

    axios.put(
      `https://csapi.herokuapp.com/api/v1/businesses/${this.props.business.id}`,
      {
        business: business
      }
    )
    .then(response => {
      console.log(response)
      this.props.updateBusiness(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="shop-block">
        <form onBlur={this.handleBlur} >
          <input className='input' type="text"
            name="name" placeholder='Name of the Business' defaultValue={this.state.name} onChange={this.handleInput} />
          <input className='input' name="city"
            placeholder='city' defaultValue={this.state.city} onChange={this.handleInput} />
          <input className='input' name="address"
            placeholder='address' defaultValue={this.state.address} onChange={this.handleInput} />
          <input className='input' name="img_url"
            placeholder='img_url' defaultValue={this.state.img_url} onChange={this.handleInput} />
        </form>
      </div>
    );
  }

}

export default BusinessForm
