import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Staffs from './staffs/staffs';

const API = 'https://hn.algolia.com/api/v1/search?query='
const DEFAULT_QUERY = 'redux'

class App extends Component {
  state = {
    hits: [],
  }
  
  componentDidMount() {
  fetch(API + DEFAULT_QUERY)
    .then(response => response.json())
    .then(data => this.setState({ hits: data.hits }));
  }
  
  showMe = () => {
    console.log(this.state.hits)
  }
  render() {
    const { hits } = this.state
    return (
      <div className="App">
        {hits.map(hit =>
          <div key={hit.objectID}>
          <a href={hit.url}>{hit.title}</a>
          </div>
        )}
        <button onClick={this.showMe}> Show me </button>
        <Staffs/>
      </div>
    );
  }
}

export default App;
