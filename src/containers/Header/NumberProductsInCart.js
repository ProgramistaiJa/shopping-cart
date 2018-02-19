import { connect } from 'react-redux';
import ButtonAppBar from '../../components/Header/index';

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const NumberProductsInCart = connect(mapStateToProps /* mapDispatchToProps */)(
  ButtonAppBar
);
export default NumberProductsInCart;
