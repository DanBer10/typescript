import React from "react";
import Counter from "./features/counter/Counter";
import AddPostForm from "./features/posts/form/AddPostForm";
import PostsList from "./features/posts/components/PostsList";
import SinglePostPage from "./features/posts/components/SinglePostPage";
import EditPostForm from "./features/posts/form/EditPostForm";
import UsersList from "./features/users/components/UsersList";
import UserPage from "./features/users/components/UserPage";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

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

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
