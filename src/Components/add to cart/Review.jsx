import React from "react";
import PropTypes from "prop-types";
import { Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";

function Review({ cart }) {
  // Calculate total price of all items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 0),
      0
    ).toFixed(2); // Format to 2 decimal places
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {cart.length > 0 ? (
          cart.map((item) => (
            <ListItem key={item.id} sx={{ padding: "8px 0" }}>
              <ListItemAvatar>
                <Avatar src={item.image} alt={item.title || "Product image"} />
              </ListItemAvatar>
              <ListItemText
                primary={item.title || "Untitled Product"}
                secondary={`Price: $${item.price.toFixed(2) || 0}, Quantity: ${item.quantity || 0}`}
              />
              <Typography variant="body2">
                ${(item.price * item.quantity).toFixed(2)}
              </Typography>
            </ListItem>
          ))
        ) : (
          <Typography variant="body2">Your cart is empty</Typography>
        )}
      </List>
      {/* Total Price Display at the bottom */}
      {cart.length > 0 && (
        <Typography variant="h6" style={{ marginTop: "16px", textAlign: "right" }}>
          Total: ${calculateTotalPrice()} {/* Display total price here */}
        </Typography>
      )}
    </React.Fragment>
  );
}

Review.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Review;
