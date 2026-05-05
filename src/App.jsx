import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

const App = () => {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // State for cart management
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Determine background and text colors based on dark mode
  const bgColor = darkMode ? '#333' : '#fff';
  const textColor = darkMode ? '#fff' : '#000';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: bgColor, color: textColor, padding: '20px' }}>
      <div>
        <h1>Shopping App</h1>
        <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>
        
        {/* Dark Mode Toggle */}
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Category Filter Dropdown */}
        <label>Filter by Category: </label>
        <select id="categoryFilter" onChange={(e) => {}}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
        
        {/* Product List */}
        <ProductList category="all" addToCart={addToCart} />
        
        {/* Shopping Cart */}
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default App;