import React from "react";
import Counter from "./features/counter/Counter";
import AddPostForm from "./components/form/AddPostForm";
import PostsList from "./components/todos/PostsList";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
