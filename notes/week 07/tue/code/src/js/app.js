import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import TodoList from './todo-list';
import Add from './add';
import Counter from './Counter';
import Filter from './Filter';


class App extends React.Component {
  render () {
    return (
      <main>
        <Header/>
        <Add/>
        <TodoList/>
        <Counter/>
        <Filter/>
      </main>
    )
  }
}



ReactDOM.render(
  <App/>,
  document.getElementById('app')
);


export default App;
