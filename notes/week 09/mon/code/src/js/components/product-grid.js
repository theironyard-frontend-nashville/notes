import React from 'react'
import { connect } from 'react-redux';

import Product from './product';

class ProductGrid extends React.Component {
  render () {
    let store = this.context.store;
    let products = this.props.products.map(product => {
      return (
        <Product key={product.id} product={product} onAdd={this.props.onAdd}/>
      )
    });

    return (
      <section className="products">
        {products}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (id) => {
      dispatch({
        type: 'CART_ADD',
        id: id
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid)
