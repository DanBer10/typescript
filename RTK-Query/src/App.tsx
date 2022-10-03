import TodoList from "./features/todos/TodoList";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api/apiSlice";

function App() {
  return (
    <ApiProvider api={apiSlice}>
      <TodoList />
    </ApiProvider>
  );
}

export default App;
