import React from 'react';
import AddProduct from './AddProduct';
import VisibleProductsList from '../../containers/Products/VisibleProductLists';

class Products extends React.Component {
  render() {
    return (
      <div>
        <AddProduct />
        <VisibleProductsList />
      </div>
    );
  }
}
export default Products;
