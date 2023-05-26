import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import testTodos from "./testTodos";


//TODO: unit tests for checking that the array of todos are put on the page
describe("smoke tests for EditableTodoList", function () {
    it("renders EditableTodo without crashing", function () {
        render(<EditableTodo todo={testTodos[0]}/>)
    });
});