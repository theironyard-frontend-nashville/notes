// Import our third party libraries
import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import _ from 'lodash';

// Import our app's components
import Header from './header';
import TodoList from './todo-list';
import Add from './add';
import Counter from './Counter';
import Filter from './Filter';

// Define our main App Component
class App extends React.Component {
  // Constructor is ran automatically whenever a new <App/> is created on the page.
  // We tell our constructor to accept props, because we could call <App someprop="hello"/>,
  // and we would want to set those properties on the React.Component constructor.
  constructor(props) {
    // Calls the React.Component constructor, so that it can do
    // all of the appropriate setup.
    super(props);

    // Update our handler methods, so that the `this` keyword
    // is always referencing the current instance of this <App/> on the page.
    this.handleAdd = this.handleAdd.bind(this);
    this.updateTodo = this.updateTodo.bind(this);

    // Set our initial state
    this.state = {
      hasLoaded: false, // determines if our inital ajax request has completed
      todos: []  // set our todos to an empty list, initially
    };
  }

  // Called from our <Add/> Component.
  // Handles prepending a new task to the todos list.
  handleAdd(task) {
    // Get a reference to the current list of todos
    let todos = this.state.todos;
    // Prepend the newly created task to our todos list
    todos.unshift(task);


    // Update our state so that the current list will re-render with our updates.
    this.setState({
      todos: todos
    });
  }
  // This runs automatically `after` the first `render()` call.
  componentDidMount() {
    // Fetch some data from the server
    this.getTodos();
  }

  // This gets the list of todos from our server
  getTodos(){
    jQuery.ajax('http://tiny-starburst.herokuapp.com/collections/todos')
          .then( response => {
            // Once we have a response from the server,
            // we should update our app component's initial state
            // with the todos that were returned from the server,
            // and also tell the component that the ajax request has finished loading.
            this.setState({
              hasLoaded: true,
              todos: response
            });
          });
  }

  // Called from <TodoList/> whenever a TodoItem has toggled the completed checkbox.
  updateTodo(data){
    // get a reference to the current todos list
    let todos = this.state.todos;
    // Find the updated todo in our todos list, by it's provide id
    let todoIndex = _.findIndex(todos, {_id: data._id});

    // Update the task's completd status, based on the updated task's completed status.
    todos[todoIndex].completed = data.completed;

    // Update the state so that the todo's list will re-render and be to date.
    this.setState({
      todos: todos
    });
  }


  // Runs automatically after setState is called, and after componentWillMount is true.
  // this is part of react's component lifecycle.
  //
  // https://facebook.github.io/react/docs/component-specs.html
  render () {
    return (
      // Wrap our entire app in a main html element
      // Render the Header,
      // The Add Screen
      // The TodoList,
      // The Counter
      // and the Filter.
      <main>
        <Header/>
        <Add handleAdd={this.handleAdd}/>
        <TodoList todos={this.state.todos}
                  hasLoaded={this.state.hasLoaded}
                  updateTodo={this.updateTodo}/>
        <Counter count={this.state.todos.length}/>
        <Filter/>
      </main>
    )
  }
}


// This is where the Actual <App/> component will be rendered onto the screen.
// We give it a DOM element to inject itself into.
ReactDOM.render(
  <App/>, // the component that will be renderd
  document.getElementById('app') // the element into which it will be renderd
);

// Make App class available for import later.
// not really needed right now, but probably a good practice to get into.
export default App;
