import React, { useRef } from "react";
import "./Todo.scss";
import { IoTrashSharp, IoCheckmarkDoneSharp } from "react-icons/io5";

function Todo({ todo, text, completeHandler, deleteHandler }) {
  const todoRef = useRef(null);

  // Animates removal of todo
  const animateDelete = () => {
    const todo = todoRef.current;
    todo.classList.add("delete");
  };

  return (
    <div className="todo" ref={todoRef}>
      <p className={`${todo.completed ? "done" : "undone"}`}>{text}</p>
      <div>
        <button onClick={completeHandler} className="button__complete">
          <IoCheckmarkDoneSharp />
        </button>
        <button
          onClick={() => {
            deleteHandler();
            animateDelete();
          }}
          className="button__delete"
        >
          <IoTrashSharp />
        </button>
      </div>
    </div>
  );
}

export default Todo;
