import {connect} from 'react-redux';
import ShoppingList from '../../components/AddProductsToCart/ShoppingList';


const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const VisibleListOfProducts = connect(mapStateToProps /* mapDispatchToProps */)(
    ShoppingList
);
export default VisibleListOfProducts;
