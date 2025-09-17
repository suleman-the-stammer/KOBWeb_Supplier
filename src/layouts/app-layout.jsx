import { Outlet, useLocation } from "react-router-dom";

import { Sidebar } from "./components";
import { Header } from "../components";

import "./app-layout.scss";


const AppLayout = () => {
  const location = useLocation();
  return (
    <>
      <div className="sidebar-container">
        <Sidebar shoulDisable={false} />
        <div className="right-pages">
          {!location.pathname.includes("edit-product") && <Header />}
          <div className={location.pathname.includes("edit-product") ? "right-page" : "detail-right-page"}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
