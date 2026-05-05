import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div data-testid={`product-${product.id}`}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button 
        data-testid={`add-to-cart-${product.id}`}
        onClick={() => addToCart(product)} 
        disabled={!product.inStock}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
