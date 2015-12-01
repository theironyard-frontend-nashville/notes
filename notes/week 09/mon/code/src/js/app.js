import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import PickleStore from './components/pickle-store';

const store = createStore(reducers);
console.log(store);
const app = (
  <Provider store={store}>
    <PickleStore store={store}/>
  </Provider>
);

render(app, document.getElementById('root'));
