import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ cart }) => {
  // Calculate total price
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.length === 0 ? (
          <li data-testid="empty-cart">Your cart is empty.</li>
        ) : (
          cart.map((item, index) => (
            <li key={item.id || index} data-testid={`cart-item-${item.id}`}>
              {item.name} is in your cart.
            </li>
          ))
        )}
      </ul>
      {cart.length > 0 && (
        <p data-testid="cart-total">
          <strong>Total: ${total.toFixed(2)}</strong>
        </p>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;