import React, { Component } from "react";
import styled from "styled-components";

class TodoApp extends Component {
  constructor() {
    super();

    const divApp = styled.div`
      color: black;
    `;

    this.state = {
      input: "",
      todos: [
        {
          id: 0,
          text: "Makan Makan"
        },
        {
          id: 1,
          text: "Tidur tidur"
        }
      ]
    };
  }

  handleTodoInput = event => {
    this.setState({ input: event.target.value });
  };

  handleTodoSubmit = event => {
    event.preventDefault();
    console.log("TODO SUBMITTED!", this.state.input);
    if (this.state.input !== "") {
      const newTodo = {
        id: this.state.todos.length,
        text: this.state.input
      };
      const newTodos = this.state.todos.concat(newTodo);

      this.setState({
        input: "",
        todos: newTodos
      });
    } else {
      console.log("Input Must Filled !!!");
    }
  };
  handleDelete = idInput => {
    const filteredTodo = this.state.todos.filter(todo => {
      return todo.id !== idInput;
    });
    this.setState({
      todos: filteredTodo
    });
  };

  render() {
    return (
      <divApp>
        <h1>Todo App</h1>
        <form onSubmit={this.handleTodoSubmit}>
          <input
            type="text"
            placeholder="What you have done?"
            onChange={this.handleTodoInput}
            value={this.state.input}
          />
          <input type="submit" value="Add Todo" />
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo.id}: {todo.text}
                <span>
                  <button onClick={() => this.handleDelete(todo.id)}>
                    Delete
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </divApp>
    );
  }
}

export default TodoApp;
