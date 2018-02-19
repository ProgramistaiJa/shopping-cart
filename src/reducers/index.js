import { combineReducers } from 'redux';
import products from './productsReducer';
import deliveries from './deliveryReducer'

const rootReducer = combineReducers({
  products: products,
    deliveries: deliveries
});

export default rootReducer;
