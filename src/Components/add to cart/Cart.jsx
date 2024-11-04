import React from 'react';
import './Addcart.css';
import { connect } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../Redux/action';
import NavScrollExample from '../header/Navbar';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, removeFromCart, incrementQuantity, decrementQuantity }) {
  const navigate = useNavigate();

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Navigate to checkout page with cart items in state
    navigate('/checkout', { state: { cartItems: cart } });
  };

  return (
    <>
      <NavScrollExample />
      <div className="Cart">
        <h1>Your Cart</h1>
        <div></div>
        {cart && cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                {item.image ? (
                  <img src={item.image} alt={item.name || 'Product'} />
                ) : (
                  <p>No image available</p>
                )}
                <div className='titel'>
                  <h2>{item.title || 'Untitled Product'}</h2>
                </div>
                <h4>Price per unit: ${item.price || 'N/A'}</h4>
                <div className='quantity'>
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>Quantity: {item.quantity || 0}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <h4>Total Price: ${(item.price || 0) * (item.quantity || 0)}</h4>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}

            {/* Total Price Section */}
            <div className="Cart-total">
              <h2>Total Price: ${calculateTotalPrice()}</h2>
            </div>

            {/* Proceed to Checkout Button */}
            <div className="proceed-checkout">
              <button onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (productId) => dispatch(removeFromCart(productId)),
  incrementQuantity: (productId) => dispatch(incrementQuantity(productId)),
  decrementQuantity: (productId) => dispatch(decrementQuantity(productId)),
});

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
