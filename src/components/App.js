import React, { Component } from 'react';
import './App.css';
import Header from './Header';
// import Products from "./Products";
import ProductsList from "./ProductsList";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/*<Products/>*/}
        <ProductsList />
      </div>
    );
  }
}

export default App;
