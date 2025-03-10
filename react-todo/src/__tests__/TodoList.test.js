import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";


test("renders todo list with initial items", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});


test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo...");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Write tests" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

test("deletes a todo", () => {
  render(<TodoList />);

  // Ensure the todo "Learn React" is initially in the document
  expect(screen.getByText("Learn React")).toBeInTheDocument();

  // Use getAllByText to get all "Delete" buttons and then select the first one
  const deleteButtons = screen.getAllByText("Delete");
  expect(deleteButtons.length).toBeGreaterThan(0); // There should be at least one
  const deleteButton = deleteButtons[0];

  // Click the first delete button
  fireEvent.click(deleteButton);

  // Verify that "Learn React" is no longer in the document
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});


