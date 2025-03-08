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
  const input = screen.getByTestId("todo-input");
  const button = screen.getByTestId("add-button");

  fireEvent.change(input, { target: { value: "Write Tests" } });
  fireEvent.click(button);

  expect(screen.getByText("Write Tests")).toBeInTheDocument();
});

// ✅ Test Toggling a Todo
test("toggles a todo item", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");

  // Initially not completed
  expect(todoItem).not.toHaveStyle("text-decoration: line-through");

  // Click to toggle
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  // Click again to undo
  fireEvent.click(todoItem);
  expect(todoItem).not.toHaveStyle("text-decoration: line-through");
});

// ✅ Test Deleting a Todo
test("deletes a todo item", () => {
  render(<TodoList />);
  const deleteButton = screen.getByTestId("delete-1");

  fireEvent.click(deleteButton);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
