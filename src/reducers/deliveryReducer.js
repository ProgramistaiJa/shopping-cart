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
                    payment: action.value,
                    nameoncard: action.nameoncard,
                    creditcardnumber: action.creditcardnumber,
                    expiration: action.expiration,
                    cvv: action.cvv,
                    date: action.date
                }
            ];

        default:
            return state;
    }
};
export default productsInCart;
