import React from 'react';
import './CartItem.css'; // For styling cart items

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  const itemTotalCost = (item.cost * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} className="cart-item-thumbnail" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>Unit Cost: ${item.cost.toFixed(2)}</p>
        <p>Total for this type: ${itemTotalCost}</p>
        <div className="cart-item-quantity-controls">
          <button onClick={() => onDecrease(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)}>+</button>
        </div>
        <button onClick={() => onRemove(item.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;