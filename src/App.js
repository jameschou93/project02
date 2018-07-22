import React, { Component } from 'react';
import './App.css';
import NewBusinesses from './components/newBusinesses'
import ReactBootstrap from 'react-bootstrap'
import {NavBar, NavItem} from 'react-bootstrap'

class App extends Component {

  showMe = () => {
    console.log(this.state.businesses)
  }

  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
              <button onClick={this.addNew} className="new-cafe-button"> New Cafe </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">

        <div className="row my-4">

        </div>

        <div className="card text-white bg-secondary my-4 text-center">
          <div className="card-body">
            <p className="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <NewBusinesses className="listed-businesses"/>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
            </div>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
