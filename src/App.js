import logo from './logo.svg';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import './App.css'; // General app styling

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/cart" element={<CartPage />} />
            {/* Optional: Add a route for product details if needed, though not explicitly in scope for this setup */}
            {/* <Route path="/products/:id" element={<ProductDetailPage />} /> */}
          </Routes>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;
