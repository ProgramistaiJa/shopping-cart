import React, { Component } from 'react';
import './App.css';
import Products from "./Products";
import Header from './Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Products/>
      </div>
    );
  }
}

export default App;
