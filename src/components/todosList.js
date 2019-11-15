import React from "react";
import PropTypes from "prop-types";

const TodosList = ({ todos }) => {
  const renderTodos = todos => {
    return todos.map(todo => <li key={todo.id}>{todo.title}</li>);
  };
  return <ol>{renderTodos(todos)}</ol>;
};

TodosList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodosList;
