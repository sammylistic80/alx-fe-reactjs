import React from "react"; // ✅ Add this line
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

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

  // Ensure the todo exists before deleting
  expect(screen.getByText("Learn React")).toBeInTheDocument();

  // 🔥 Try different ways to find the delete button
  const deleteButton = screen.getByText("Delete"); // First try
  // const deleteButton = screen.getAllByRole("button", { name: /delete/i })[0]; // If "Delete" text exists
  // const deleteButton = screen.getAllByText(/delete/i)[0]; // Another possible way

  expect(deleteButton).toBeInTheDocument(); // Ensure it exists

  fireEvent.click(deleteButton); // Click delete

  // Ensure the todo is removed from the DOM
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});

