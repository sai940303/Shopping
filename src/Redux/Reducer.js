const initialState = {
  count: 0, // Consider removing if not used
  dummyData: [],
  jewelryData: [],
  categoriesData: [],
  cart: [], // Initialize cart as an empty array
  error: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === payload
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        ),
      };

    case "FETCH_DUMMY_SUCCESS":
      return {
        ...state,
        dummyData: payload,
      };

    case "FETCH_DUMMY_FAIL":
      return {
        ...state,
        error: payload,
      };

    case "FETCH_JEWELRY_SUCCESS":
      return {
        ...state,
        jewelryData: payload,
      };

    case "FETCH_JEWELRY_FAIL":
      return {
        ...state,
        error: payload,
      };

    case "FETCH_CATEGORIES_SUCCESS":
      return {
        ...state,
        categoriesData: payload,
      };

    case "FETCH_CATEGORIES_FAIL":
      return {
        ...state,
        error: payload,
      };

    // Cart-related cases
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(item => item.id === payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...payload, quantity: 1 }],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload),
      };

    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === payload.id ? { ...item, quantity: payload.quantity } : item
        ),
      };

    default:
      return state;
  }
} 