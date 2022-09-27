import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <>
      <div className="nav">
        <div className="nav__container">
          <div className="nav__links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>

            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="nav__info">
            <h2>Logged in as: {username}</h2>

            <button className="btn logout">logout</button>
          </div>
        </div>
      </div>
    </>
  );
};
