import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const initialFormData = todo;
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(isEditing ? false : true);
  }

  /** Call remove fn passed to this. */
  function handleDelete(id) {
    remove(id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    console.log("form data =>", formData);
    toggleEdit();
    update(formData);
  }

  return (
    <div className="EditableTodo">
      {isEditing && (
        <TodoForm handleSave={handleSave} formData={initialFormData} />
      )}
      {!isEditing && (
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}
            >
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={() => handleDelete(todo.id)}
            >
              Del
            </button>
          </div>

          <Todo
            id={todo.id}
            title={todo.title}
            description={todo.description}
            priority={todo.priority}
          />
        </div>
      )}
    </div>
  );
}

export default EditableTodo;
