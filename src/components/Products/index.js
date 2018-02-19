import React from 'react';
import NumberProductsInCart from '../../containers/Header/NumberProductsInCart'
import AddProduct from './AddProduct';
import VisibleProductsList from '../../containers/Products/VisibleProductLists';

class Products extends React.Component {
  render() {
    return (
      <div>
        <NumberProductsInCart />
        <AddProduct />
        <VisibleProductsList />
      </div>
    );
  }
}
export default Products;
