import React, { PropTypes } from 'react'
import { connect } from 'react-redux';

class Cart extends React.Component {
  render () {
    let items = this.props.cart.map(item => {
      let product = this.props.productsById[item.id];
      let sub = product.price * item.qty;

      return (
        <li key={item.id}>
          <h2>{product.name}</h2>
          <p>Qty: {item.qty}</p>
          <p>Sub: ${sub.toFixed(2)}</p>
          <button onClick={ () => {
              this.props.onRemove(item.id);
          }}>Remove</button>
        </li>
      )
    })
    return (
      <aside className="cart">
        <h2>Your Cart</h2>
        <button onClick={this.props.onClear}>Clear</button>
        <button onClick={() => {
            this.props.onPurchase(this.props.cart);
          }}>PURCHASE ${this.props.total}</button>
        <ul>
          {items}
        </ul>
      </aside>
    )
  }
}

const mapStateToProps = ({productsById, cart}, ownProps) => {
  let total = cart.reduce((total, current) => {
    return total + (productsById[current.id].price * current.qty);
  }, 0.00).toFixed(2);

  return {
    productsById,
    cart,
    total
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPurchase: (cart) => {
      dispatch({
        type: 'CART_PURCHASE',
        cart: cart
      });
    },

    onClear: () => {
      dispatch({
        type: 'CART_CLEAR'
      });
    },

    onRemove: (id) => {
      dispatch({
        type: 'CART_REMOVE',
        id: id
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
