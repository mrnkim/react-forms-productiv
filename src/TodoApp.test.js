import React from "react";
import { render } from "@testing-library/react";
import testTodos from "./testTodos";
import EditableTodoList from "./EditableTodoList";
import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";

describe("smoke tests for TodoApp", function () {
    it("renders EditableTodoList without crashing", function () {
        render(<EditableTodoList todos={testTodos}/>)
      });
    
      it("renders TopTodo without crashing", function () {
        render(<TopTodo todos={testTodos}/>)
      });
    
      it("renders TodoForm without crashing", function () {
        render(<TodoForm />)
      });

      //FIXME: Implement more integration type testing, if someone deletes a todo then check it is gone
  });



