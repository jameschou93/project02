import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Staffs from './staffs/staffs';
import NewBusinesses from './components/newBusinesses'

class App extends Component {

  showMe = () => {
    console.log(this.state.businesses)
  }

  render() {
    return (
      <div className="App">
        <NewBusinesses/>
      </div>
    );
  }
}

export default App;
