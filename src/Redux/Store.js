import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'; // Use named import for thunk
import reducer from './Reducer';

// Load cart state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) return { cart: [] }; // Default to an empty cart if no data
    return { cart: JSON.parse(serializedState) };
  } catch (err) {
    return { cart: [] }; // Default to an empty cart if there is an error
  }
};

// Create the Redux store
const store = createStore(
  reducer,
  loadState(), // Initialize state from localStorage
  composeWithDevTools(applyMiddleware(thunk)) // Apply thunk middleware
);

// Save cart state to localStorage whenever the store changes
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart));
  } catch (err) {
    // Handle errors if needed
    console.error("Could not save cart to localStorage", err);
  }
});

export default store;
