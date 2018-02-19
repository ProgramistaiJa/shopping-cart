import { combineReducers } from 'redux';
import products from './productsReducer';

const rootReducer = combineReducers({
  products: products
});

export default rootReducer;
