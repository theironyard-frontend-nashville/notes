import { combineReducers } from 'redux';
import _ from 'lodash';

const PRODUCT_DATA = [
  {id: 1, name: 'Vlassic', price: 3.99, qty: 99},
  {id: 2, name: 'Clausen', price: 3.89, qty: 99},
  {id: 3, name: 'Wickles', price: 3.29, qty: 99},
  {id: 4, name: 'Famous Daves Spicy', price: 8.29, qty: 99}
];


const productsById = () => {
  return PRODUCT_DATA.reduce((total, current) => {
    total[current.id] = current;
    return total;
  }, {});
}

const products = (state = PRODUCT_DATA, action) => {
  switch (action.type) {
    case 'CART_PURCHASE':

      let cartById = action.cart.reduce((total, current) => {
        total[current.id] = current;
        return total;
      }, {});

      return state.map(item => {
        let cartItem = cartById[item.id];
        let qty = item.qty;
        if (cartItem) {
          qty = qty - cartItem.qty;
        }

        return {
          ...item,
          qty
        }
      });
    default:
      return state;
  }
}


const cart = (state = [], action) => {
  switch (action.type) {
    case 'CART_ADD':
      return addToCart(state, action);
    case 'CART_REMOVE':
      return removeFromCart(state, action);
    case 'CART_PURCHASE':
      return [];
    case 'CART_CLEAR':
      return [];
    default:
      return state;
  }
}

let addToCart = (state, action) => {
  let itemIndex = _.findIndex(state, item => {
    return item.id === action.id;
  });

  if (itemIndex !== -1) {
    return updateItem(state, itemIndex, {
      qty: state[itemIndex].qty + 1
    });
  } else {
    return [
      ...state,
      {id: action.id, qty: 1}
    ]
  }
}

let removeFromCart = (state, action) => {
  let itemIndex = _.findIndex(state, item => {
    return item.id === action.id;
  });

  if (itemIndex !== -1) {
    return removeItem(state, itemIndex);
  }
  return state;
}

const updateItem = (data, index, changes) => {
  return [
    ...data.slice(0, index), // takes the elements from our existing cart, until the index of our match  and adds to the array
    Object.assign({}, data[index], changes),
    ...data.slice(index + 1) // takes the remaining elements AFTER the matches index and adds to the array
  ]
}

const removeItem = (data, index) => {
  return [
    ...data.slice(0, index),
    ...data.slice(index + 1)
  ]
}

const findProductById = (products, id) => {
  let product = products.filter(product => {
    return product.id === id;
  });

  if (product.length) {
    return product[0];
  }

  return null;
}

const logger = (state = null, action) => {
  console.log('ACTION ->', action);
  return state;
}

export default combineReducers({
  productsById,
  products,
  cart,
  logger
});
