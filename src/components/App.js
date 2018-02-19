import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Reboot from 'material-ui/Reboot';
import './App.css';
import Header from '../containers/Header/NumberProductsInCart'
import Products from "./Products/index";
import ProductsList from '../containers/Products/VisibleProductLists'
import DeliveryForm from './DeliveryForm';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Reboot />
                    <Header />

                    <Route exact path="/" component={Products}/>
                    <Route path="/deliveryform" component={DeliveryForm}/>
                    <Route path="/productslist" component={ProductsList}/>
                </div>
            </Router>
        );
    }
}

export default App;
