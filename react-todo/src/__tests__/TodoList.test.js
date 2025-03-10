// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides the toBeInTheDocument matcher
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders todo list with initial items", () => {
    render(<TodoList />);
    // Check that the initial todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByText("Add");

    // Simulate user typing in the input
    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    // Check that the new todo is rendered
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    // Ensure "Learn React" is present before deletion
    expect(screen.getByText("Learn React")).toBeInTheDocument();

    // Since each todo has its own Delete button, get all delete buttons
    const deleteButtons = screen.getAllByText("Delete");
    // Assuming the first button corresponds to "Learn React"
    expect(deleteButtons.length).toBeGreaterThan(0);
    fireEvent.click(deleteButtons[0]);

    // Verify that "Learn React" is no longer in the document
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
