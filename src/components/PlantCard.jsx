import React from 'react';
import './PlantCard.css'; // For styling the plant cards

const PlantCard = ({ plant, onAddToCart }) => {
  return (
    <div className="plant-card">
      <img src={plant.imageUrl} alt={plant.name} className="plant-image" />
      <h3>{plant.name}</h3>
      <p className="plant-description">{plant.description}</p>
      <p className="plant-cost">${plant.cost.toFixed(2)}</p>
      <button onClick={() => onAddToCart(plant)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default PlantCard;