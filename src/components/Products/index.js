import React from 'react';
import products from '../../utilities/productsList';

class Products extends React.Component {
    render(){
        return(
            <div>
                <h1>Produkty</h1>
                {

                    Object.entries(products).map(
                        ([key, value]) => value.map(
                            product => <p>{product}</p>
                        )
                    )
                }
            </div>
        )
    }
}
export default Products