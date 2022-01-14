import React, { Component } from 'react';
import './App.css';
import Product from './component/Product';

class App extends Component {
  render(){
    return (
      <div id="wrapper">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" >Props</a>        
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
