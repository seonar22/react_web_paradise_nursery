import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem, getTotalCost, clearCart } = useCart();

  const handleCheckout = () => {
    alert(`Checkout complete! Total amount: $${getTotalCost()}. Your order has been placed.`);
    clearCart(); 
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Start shopping!</Link></p>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total Cost: ${getTotalCost()}</h3>
            <div className="cart-actions">
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button onClick={handleCheckout} className="checkout-btn">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;