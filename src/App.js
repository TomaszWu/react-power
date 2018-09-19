import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            todos: [
                {id: 1, content: 'buy some milk'},
                {id: 2, content: 'play a game'},
            ]
        }
    }


  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
        return todo.id !== id;
    });
    this.setState({
        todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();

    let todos = [...this.state.todos, todo];

    this.setState({
        todos: todos
    })
  }

    editTodo = () => {
      this.setState({isEdit: true});
  }

  editSum

  render() {
      return (

          <div>
              {
                  this.state.isEdit
                      ? (
                          <div>
                              <form onSubmit={this.handleSubmit}>
                                  <label>Add new todo:</label>
                                  <input type="text" onChange={this.handleChange} value={this.state.content}/>
                              </form>
                          </div>
                      ) : (

                          <div className="todo-app container">
                              <h1 className="center blue-text">Todo's </h1>
                              <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/>
                              <AddTodo addTodo={this.addTodo}/>
                          </div>
                      )
              }
          </div>
      )






  }
}

export default App;
