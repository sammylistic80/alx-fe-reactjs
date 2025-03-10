import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm"; // ✅ Import

const TodoList = () => {
  const [todos, setTodos] = useState(["Learn React", "Build a Todo App"]);

  const addTodo = (newTodo) => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      
      {/* ✅ Use the AddTodoForm component here */}
      <AddTodoForm addTodo={addTodo} />
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => deleteTodo(index)}>Delete</button> {/* 🔥 Make sure this exists */}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default TodoList;
