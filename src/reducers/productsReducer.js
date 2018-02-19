const productsInCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return [
                ...state,
                {
                    id: action.id,
                    product: action.product,
                    // units: action.units,
                    price: action.price,
                }
            ];

        default:
            return state;
    }
};
export default productsInCart;
