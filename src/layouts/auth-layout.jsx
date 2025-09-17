import React from "react";
import { Outlet } from "react-router-dom";

// Components :
import { Sidebar } from "./components";
import { Header } from "../components";


const AuthLayout = () => {
  return (
    <div className="sidebar-container">
      <Sidebar shoulDisable={true} />
      <div className="right-pages">
        <Header />
        <div className="auth-routes">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
