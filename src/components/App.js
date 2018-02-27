import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Reboot from 'material-ui/Reboot';
import './App.css';
import Header from '../containers/Header/NumberProductsInCart'
import Products from "./AddProductsToCart/index";
import ProductsList from '../containers/Products/VisibleProductLists'
import DeliveryForm from '../containers/Deliveries/Delivery';
import Summary from '../containers/Summary/VisibleSummary';
import ReduxForm from './ReduxForm/index';
import FormatedInputs from './FormatedInputs/index'

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
                    <Route path="/summary" component={Summary}/>
                    <Route path="/reduxform" component={ReduxForm}/>
                    <Route path="/formatedinputs" component={FormatedInputs}/>
                </div>
            </Router>
        );
    }
}

export default App;
