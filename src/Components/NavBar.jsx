import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => alert("logged out successfully"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center justify-between">
      <div></div>
      <div className="flex items-center gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-5">
        <img className="w-11 rounded-full" src={`${user?user.photoURL: userImg}`} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-8">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
