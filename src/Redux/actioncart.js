// Redux/actions.js

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";

// Action to add items to the cart
export const addToCart = (product) => (dispatch, getState) => {
  const { cart } = getState();
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // If the product already exists, increase its quantity
    dispatch({
      type: UPDATE_CART_QUANTITY,
      payload: { id: product.id, quantity: existingProduct.quantity + 1 },
    });
  } else {
    // Add new product with a quantity of 1
    dispatch({
      type: ADD_TO_CART,
      payload: { ...product, quantity: 1 },
    });
  }
};

// Action to remove items from the cart
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
