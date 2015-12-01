import React from 'react';

export default ({product, onAdd}, context) => (
  <div key={product.id} className="product">
    <h2>{product.name}</h2>
    <p>${product.price} / {product.qty}</p>
    <button onClick={() => {
        onAdd(product.id);
      }}>Add to Cart</button>
  </div>
);
