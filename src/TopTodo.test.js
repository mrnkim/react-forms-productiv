import React from "react";
import { render } from "@testing-library/react";
import testTodos from "./testTodos";
import Todo from "./Todo";

const testTodo = testTodos[0];

describe("smoke tests for TopTodo", function () {
    it("renders EditableTodoList without crashing", function () {
        render(<Todo
            id={testTodo.id}
            title={testTodo.title}
            description={testTodo.description}
            priority={testTodo.priority} />)
    });

});