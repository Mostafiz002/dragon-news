import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { FcAddressBook, FcAnswers, FcApproval } from "react-icons/fc";

const NavBar = () => {
  const { user, logOut, setUser } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("logged out successfully");
        setUser(null);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center justify-between mt-6 mb-12">
      <div className="flex gap-1 items-center"><FcAddressBook size={24}/> <h3 className="text-2xl font-medium">Dragon News</h3></div>
      <div className="flex items-center gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/auth/login">Login</NavLink>
        <NavLink to="/auth/register">Register</NavLink>
      </div>
      <div className="flex items-center gap-5">
        <p>{user && user.displayName}</p>
        <img
          className="w-11 rounded-full"
          src={`${user ? user.photoURL : userImg}`}
          alt=""
        />
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
