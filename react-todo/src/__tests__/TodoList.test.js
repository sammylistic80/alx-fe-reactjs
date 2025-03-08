import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

// ✅ Test Initial Rendering
test("renders todo list with initial items", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

// ✅ Test Adding a Todo
test("adds a new todo", () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText("Add a new todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Write tests" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

// ✅ Test Toggling a Todo
test("toggles todo completion", () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);

  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

// ✅ Test Deleting a Todo
test("deletes a todo", () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText("Learn React");
  const deleteButton = todoItem.nextSibling;

  fireEvent.click(deleteButton);

  expect(todoItem).not.toBeInTheDocument();
});
