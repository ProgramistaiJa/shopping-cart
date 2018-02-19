import React, { Component } from 'react';
import './App.css';
import Products from "./Products/index";
import DeliveryForm from './DeliveryForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Products/>*/}
        <DeliveryForm />
      </div>
    );
  }
}

export default App;
