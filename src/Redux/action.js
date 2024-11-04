// Redux/actions.js

// Action Types
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const FETCH_DUMMY_SUCCESS = 'FETCH_DUMMY_SUCCESS';
export const FETCH_DUMMY_FAIL = 'FETCH_DUMMY_FAIL';
export const FETCH_JEWELRY_SUCCESS = 'FETCH_JEWELRY_SUCCESS';
export const FETCH_JEWELRY_FAIL = 'FETCH_JEWELRY_FAIL';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAIL = 'FETCH_CATEGORIES_FAIL';

// Action to increment quantity
export const incrementQuantity = (productId) => ({
  type: INCREMENT_QUANTITY,
  payload: productId,
});

// Action to decrement quantity
export const decrementQuantity = (productId) => ({
  type: DECREMENT_QUANTITY,
  payload: productId,
});

// Fetch dummy data from an API
export const fetchDummyData = () => async (dispatch) => {
  try {
    const response = await fetch('https://hm.com/api/products');
    if (!response.ok) throw new Error('Failed to fetch dummy data');
    const data = await response.json();

    dispatch({
      type: FETCH_DUMMY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DUMMY_FAIL,
      payload: error.message,
    });
  }
};

// Fetch jewelry data from an API
export const fetchJewelryData = () => async (dispatch) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
    if (!response.ok) throw new Error('Failed to fetch jewelry data');
    const data = await response.json();

    dispatch({
      type: FETCH_JEWELRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_JEWELRY_FAIL,
      payload: error.message,
    });
  }
};

// Fetch categories data from an API
export const fetchCategoriesData = () => async (dispatch) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('Failed to fetch categories data');
    const data = await response.json();

    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CATEGORIES_FAIL,
      payload: error.message,
    });
  }
};

// Action to add items to the cart
export const addToCart = (product) => (dispatch, getState) => {
  if (!product || !product.id) {
    console.error('Invalid product:', product);
    return;
  }

  const { cart } = getState(); // Accessing the cart from Redux state
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      payload: { id: product.id, quantity: existingProduct.quantity + 1 },
    });
  } else {
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
