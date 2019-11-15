import React, { Component } from "react";
import TodosList from "../components/todosList";
import { connect } from "react-redux";
import { fetchTodosFromService, addTodo } from "../actions/todos";
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import NavBar from "../components/navBar";
import Weather from "../components/weather";

class TodoPage extends Component {
  state = {
    todoInputText: ""
  };

  componentDidMount() {
    this.props.fetchTodosFromService();
    // this.props.fetchGiphyFromService();
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.state.todoInputText);
    this.setState({ todoInputText: "" });
  };
  handleChange = e => {
    this.setState({ todoInputText: e.target.value });
  };

  render() {
    return (
      <section>
        <NavBar />
        <Header title="Todo Page" />
        <main>
          <Weather />
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.todoInputText}
              onChange={this.handleChange}
            />
            <button>Add todo</button>
          </form>
          <TodosList todos={this.props.todos} />
        </main>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { fetchTodosFromService, addTodo }
)(TodoPage);
