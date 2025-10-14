import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div></div>
      <div className="flex items-center gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-5">
         <img src={user} alt="" />
        <button className="btn btn-primary px-8">
         
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
