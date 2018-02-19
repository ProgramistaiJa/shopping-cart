import {connect} from 'react-redux';
import Summary from '../../components/Summary/index';


const mapStateToProps = state => {
    return {
        products: state.products,
        deliveries: state.deliveries
    };
};

const VisibleSummary = connect(mapStateToProps /* mapDispatchToProps */)(
    Summary
);
export default VisibleSummary;
