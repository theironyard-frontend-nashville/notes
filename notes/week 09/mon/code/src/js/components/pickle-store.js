import React from 'react'
import ProductGrid from './product-grid';
import Cart from './cart';

class PickleStore extends React.Component {
  render () {
    return (
      <main>
        <h1>Welcome to the pickle store!</h1>
        <ProductGrid />
        <Cart />
      </main>
    )
  }
}

export default PickleStore;
