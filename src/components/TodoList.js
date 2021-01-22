import React from "react";
import Todo from "./Todo";
import "./Todo.scss";

function TodoList({ todos, setTodos, filteredTodos }) {
  const deleteHandler = (todo) => {
    setTimeout(() => {
      setTodos(todos.filter((t) => t.id !== todo.id));
    }, 400);
  };

  // Marks todo as completed or uncompleted
  const completeHandler = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div>
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          deleteHandler={() => deleteHandler(todo)}
          completeHandler={() => completeHandler(todo)}
        />
      ))}
    </div>
  );
}

export default TodoList;
