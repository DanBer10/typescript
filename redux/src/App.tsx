import React from "react";
import Counter from "./features/counter/Counter";
import AddPostForm from "./features/posts/form/AddPostForm";
import PostsList from "./features/posts/components/PostsList";
import SinglePostPage from "./features/posts/components/SinglePostPage";
import EditPostForm from "./features/posts/form/EditPostForm";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
