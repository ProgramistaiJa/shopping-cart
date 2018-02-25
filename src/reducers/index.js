import { combineReducers } from 'redux';
import products from './productsReducer';
import deliveries from './deliveryReducer';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  products: products,
  deliveries: deliveries,
  form: formReducer
});

export default rootReducer;
