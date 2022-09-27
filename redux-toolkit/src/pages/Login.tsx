import React, { useEffect, useState } from "react";
import { login, logout } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <>
      <h1>Login</h1>

      {username}
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};

export default Login;
