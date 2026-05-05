import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('all');

  const addToCart = (product) => {
    if (product.inStock) {
      setCart([...cart, product]);
    }
  };

  return (
    <div style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000', minHeight: '100vh', padding: '20px' }}>
      <h1>Shopping App</h1>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
      
      <ProductList category={category} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;