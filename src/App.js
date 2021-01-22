import "./App.scss";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import React, { useEffect, useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Gets todos saved in Local storage once the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Filters todos and saves them to Local storage when state of todos or status changes.
  useEffect(() => {
    filterHandle();
    saveLocalTodos();
  }, [todos, status]);

  // Filters todos based on their status (completed, uncompleted, all)
  const filterHandle = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Saves todos to Local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Gets todos stored in Local storage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <h1>What's the plan for today?</h1>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
    </div>
  );
}

export default App;
