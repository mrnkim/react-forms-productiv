import React from "react";
import { render } from "@testing-library/react";
import testTodos from "./testTodos";
import Todo from "./Todo";

const testTodo = testTodos[0];


describe("Todo displays on the webpage", function () {
    it('ensure Todo render correctly', function () {
        const result = render(<Todo 
            title={testTodo.title} 
            description={testTodo.description} 
            priority={testTodo.priority} />);
        expect(result.queryByText("Code!")).toBeInTheDocument();
    });

    it('ensure Todo render correctly', function () {
        const result = render(<Todo 
            title={testTodo.title} 
            description={testTodo.description} 
            priority={testTodo.priority}/>);
        expect(result.queryByText("Write some code")).toBeInTheDocument();
    });

    it('ensure Todo render correctly', function () {
        const result = render(<Todo 
            title={testTodo.title} 
            description={testTodo.description} 
            priority={testTodo.priority}/>);
        expect(result.queryByText("priority:2")).toBeInTheDocument();
    });
});