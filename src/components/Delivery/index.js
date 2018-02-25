import React from 'react';
import {connect} from "react-redux";
import DeliveryData from './DeliveryData';
import Summary from './Summary';

class Delivery extends React.Component {
    render(){
        const {deliveries} = this.props;
        return (
            <div>
                {
                    deliveries.length > 0
                    ?<Summary/>
                        :<DeliveryData/>
                }

            </div>
        )
    }
}
Delivery = connect()(Delivery);
export default Delivery;