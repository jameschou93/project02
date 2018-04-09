import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Staffs from './staffs/staffs';

const API = 'https://csapi.herokuapp.com/api/v1/businesses/'

class App extends Component {
  state = {
    hits: [],
  }

  componentDidMount() {
  fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ hits: data}));
  }

  showMe = () => {
    console.log(this.state.hits)
  }

  render() {
    const { hits } = this.state
    return (
      <div className="App">
        {hits.map(hit =>
          <div key={hit.id}>
            <h2> {hit.name} </h2>
              <ul>
                <li>{hit.city}</li>
                <li>{hit.address}</li>
              </ul>
          </div>
        )}
        <button onClick={this.showMe}> Show me </button>
        <Staffs/>
      </div>
    );
  }
}

export default App;
