import {connect} from 'react-redux';
import Delivery from '../../components/Delivery/index';


const mapStateToProps = state => {
    return {
        products: state.products,
        deliveries: state.deliveries
    };
};

const Deliveries = connect(mapStateToProps /* mapDispatchToProps */)(
    Delivery
);
export default Deliveries;
