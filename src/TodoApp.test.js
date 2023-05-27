import React from "react";
import { render } from "@testing-library/react";
import testTodos from "./testTodos";
import EditableTodoList from "./EditableTodoList";
import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";

describe("smoke tests for TodoApp", function () {
  it("renders EditableTodoList without crashing", function () {
    render(<EditableTodoList todos={testTodos} />);
  });

  it("renders TopTodo without crashing", function () {
    render(<TopTodo todos={testTodos} />);
  });

  it("renders TodoForm without crashing", function () {
    render(<TodoForm />);
  });

  //FIXME: Implement more integration type testing, if someone deletes a todo then check it is gone
});

describe("add a new todo", function () {
  it("shows a submitted new todo on the page", function () {
    const { container } = render(<TodoForm todos={testTodos} />);

    const newTodo = testTodos[0];

    // do not expect to see the new todo yet
    expect(container.querySelector(".TodoApp")).not.toBeInTheDocument();

    // mock submit a new todo form

    // expect to see the new todo
  });

  //FIXME: Implement more integration type testing, if someone deletes a todo then check it is gone
});
