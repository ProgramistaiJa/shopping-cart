import {connect} from 'react-redux';
import CustomizedInputs from '../../components/DeliveryForm';


const mapStateToProps = state => {
    return {
        products: state.products,
        deliveries: state.deliveries
    };
};

const Deliveries = connect(mapStateToProps /* mapDispatchToProps */)(
    CustomizedInputs
);
export default Deliveries;
