import React, { useRef, useEffect, useState } from "react";
import "./Form.scss";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  // Focus on input

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  const inputHandler = (event) => {
    setInputText(event.target.value);
  };

  // Adds new todo
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
    }
    setInputText("");
  };

  // Toggles the status (completed or uncompleted)
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <div className="form">
        <input
          type="text"
          value={inputText}
          onChange={inputHandler}
          ref={inputFocus}
        />
        <button type="submit" onClick={onSubmitHandler} className="form__btn">
          Add
        </button>
      </div>
      <div>
        <select name="todos" onChange={statusHandler} className="form__options">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
