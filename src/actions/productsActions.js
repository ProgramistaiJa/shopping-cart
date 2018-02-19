//Actions for Products

let nextProductId = 0;
export const addDeliveryData = product => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    id: nextProductId++,
    product: product.product,
    price: product.price
  };
};
