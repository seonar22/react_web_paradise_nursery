import React from 'react';
import PlantCard from '../components/PlantCard';
import { useCart } from '../context/CartContext';
import plantsData from '../data/plants';
import './ProductListingPage.css'; // For styling the product list

const ProductListingPage = () => {
  const { addToCart } = useCart();

  // Group plants by section
  const sections = {};
  plantsData.forEach(plant => {
    if (!sections[plant.section]) {
      sections[plant.section] = [];
    }
    sections[plant.section].push(plant);
  });

  return (
    <div className="product-listing-page">
      <h2>Our Plants</h2>
      {Object.keys(sections).map(sectionName => (
        <div key={sectionName} className="plant-section">
          <h3>{sectionName}</h3>
          <div className="plant-cards-container">
            {sections[sectionName].map((plant) => (
              <PlantCard key={plant.id} plant={plant} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;