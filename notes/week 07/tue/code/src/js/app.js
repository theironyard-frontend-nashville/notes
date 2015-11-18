import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import Header from './header';
import TodoList from './todo-list';
import Add from './add';
import Counter from './Counter';
import Filter from './Filter';


class App extends React.Component {
  constructor(props) {
    // do all the stuff that our react.component's constructor would
    // normally do.
    super(props);

    // Make sure that when handleAdd is called from a child component
    // that the this keyword references this instance of App
    this.handleAdd = this.handleAdd.bind(this);

    // set our initial state
    this.state = {
      hasLoaded: false,
      todos: []
    };
  }

  handleAdd(task) {
    let todos = this.state.todos;
    todos.unshift(task);

    this.setState({
      todos: todos
    });
  }

  componentDidMount() {
    this.getTodos();

    // Fetch our todos from the server every 3 seconds
    // setInterval(() => {
    //   this.getTodos();
    // }, 3000);
  }

  getTodos(){
    jQuery.ajax('http://tiny-starburst.herokuapp.com/collections/todos')
          .then( response => {
            this.setState({
              hasLoaded: true,
              todos: response
            });
          });
  }

  render () {
    return (
      <main>
        <Header/>
        <Add handleAdd={this.handleAdd}/>
        <TodoList todos={this.state.todos}/>
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
