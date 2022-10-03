import { useState } from "react";
import {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useAddTodoMutation,
} from "../api/apiSlice";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  const { data, isLoading, isSuccess, isError, error } = useGetTodosQuery();

  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo({ userId: 1, title: newTodo, completed: false });
    //addTodo
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
        <button className="submit">Upload</button>
      </div>
    </form>
  );

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((todo: any) => {
      return (
        <article key={todo.id}>
          <div className="todo">
            <input
              type="checkbox"
              checked={todo.completed}
              id={todo.id}
              onChange={() =>
                updateTodo({ ...todo, completed: !todo.completed })
              }
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <button className="trash" onClick={() => deleteTodo({ id: todo.id })}>
            Delete Todo
          </button>
        </article>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <div>
      {newItemSection}
      {content}
    </div>
  );
};

export default TodoList;
