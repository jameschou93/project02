import React, { Component } from 'react';
import axios from 'axios'
import update from 'immutability-helper'
import BusinessForm from './businessForm'
import Business from './business'
const API = 'https://csapi.herokuapp.com/api/v1/businesses'

class NewBusinesses extends Component {
  state = {
    businesses: [],
    editID: null,
  }

  addNew = () => {
    axios.post(
      API,
        {
          business:
          { name: '',
            address: '',
            city: '',
            zip: '',
            wifi: '',
            phone: '',
            bathroom: '',
            img_url: ''
           }
        }
    )
    .then(response => {
      console.log(response)
        const businesses = update(this.state.businesses, {
          $splice: [[0,0,response.data]]
        })
        this.setState({businesses: businesses,
        editID: response.data.id})
        })
      .catch(error => console.log(error))
  }

  updateBusiness = (business) => {
    const businessIndex = this.state.businesses.findIndex(x => x.id === business.id)
    const businesses = update(this.state.businesses, {
      [businessIndex]: { $set: business }
    })
    this.setState({
      businesses: businesses,
      notification: 'Changes saved'
    })
  }

  resetNotificaiton = () => {
    this.setState({notification: ''})
  }

  enableEditing = (id) => {
    this.setState({editID: id})
  }

  deleteBusiness = (id) => {
    axios.delete(`http://localhost:3001/api/v1/businesses/${id}`)
    .then(response => {
      const businessIndex = this.state.businesses.findIndex(x => x.id === id)
      const businesses = update(this.state.businesses, {
        $splice: [[businessIndex, 1]]
      })
      this.setState({businesses: businesses})
    })
    .catch(error => console.log(error))
  }
  componentDidMount() {
  axios.get(API)
    .then(response => {
      this.setState(
        {
          businesses: response.data
        }
      )
    })
  }

  render() {
    const { businesses } = this.state
    return (
      <div>
        <div className="top-nav">
          <span className="notification"> {this.state.notification}</span>
        </div>
        {businesses.map((business) => {
          if(this.state.editID === business.id) {
            return(<BusinessForm resetNotificaiton={this.resetNotificaiton} business={business} key={business.id} updateBusiness={this.updateBusiness}/>)
          } else {
            return(<Business onClick={this.enableEditing} onDelete={this.deleteBusiness} business={business} key={business.id}/>)
          }
        }
        )}
      </div>
    )
  }

}


export default NewBusinesses
