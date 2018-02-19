const productsInCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DELIVERY_DATA':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    address: action.address,
                    city: action.city,
                    zip: action.zip,
                    voivodeship: action.voivodeship,
                    phone: action.phone,

                }
            ];

        default:
            return state;
    }
};
export default productsInCart;
