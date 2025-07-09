import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css'; // For styling the navbar

const Navbar = () => {
  const { getTotalItems } = useCart();
  const totalItemsInCart = getTotalItems();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Paradise Nursery</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart ({totalItemsInCart})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;