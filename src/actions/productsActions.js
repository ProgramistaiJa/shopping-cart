//Actions for Products

let nextProductId = 0;
export const addProductToCart = product => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    id: nextProductId++,
    product: product.product,
    price: product.price
  };
};
