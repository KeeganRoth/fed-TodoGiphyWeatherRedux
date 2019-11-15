import uuid from "uuid/v4";
import { fetchTodos } from "../services/todos";
import { FETCH_TODOS, ADD_TODO } from "./action-types";

export const fetchTodosFromService = () => {
  return dispatch => {
    fetchTodos().then(todos => {
      dispatch({
        type: FETCH_TODOS,
        todos
      });
    });
  };
};

export const addTodo = title => ({
  type: ADD_TODO,
  id: uuid(),
  isCompleted: false,
  title
});
