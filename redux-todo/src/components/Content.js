import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../redux/TodoSlice";
import { nanoid } from "@reduxjs/toolkit";
const Content = () => {

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ id: nanoid(), text: input, completed: false }));
        setInput("");
    };


  return (
    <div className="container">
      <div className="todoBody">
        <form onSubmitCapture={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="todo"
              placeholder="Enter todo"
                value={input}
              onChange={handleChange}
            />
          </div>
        </form>
        {todos.map((todo) => {
          return (
            <div
              className="d-flex my-2 justify-content-between align-items-center"
              key={todo.id}
            >
              <input
                type="checkbox"
                onChange={() => dispatch(toggleTodo(todo))}
              />
              <p
                className={`m-0 text-dark fw-bold ${
                  todo.completed ? "completed" : ""
                }`}
              >
                {todo.text}
              </p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => dispatch(removeTodo(todo))}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
