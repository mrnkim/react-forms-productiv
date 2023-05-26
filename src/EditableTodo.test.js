import React from "react";
import { render } from "@testing-library/react";
import testTodos from "./testTodos";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const testTodo = testTodos[0];

describe("smoke tests for EditableTodo", function () {
    it("renders TodoForm without crashing", function () {
        render(<TodoForm />)
    });

    it("renders EditableTodoList without crashing", function () {
        render(<Todo
            id={testTodo.id}
            title={testTodo.title}
            description={testTodo.description}
            priority={testTodo.priority} />)
    });

});