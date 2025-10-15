import React from "react";
import NavBar from "../Components/NavBar";
import Login from "../Pages/Login";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 h-fit">
      <header className="w-11/12 mx-auto py-4">
        <NavBar />
      </header>
      <main className="w-11/12 mx-auto py-5">
        <Outlet/>
      </main>
    </div>
  );
};

export default AuthLayout;
