import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// AND-D :
import { Layout, Menu } from "antd";

// Constants:
import { AppRoutesList, AuthRoutesList } from "src/constants";

// CSS :
import "./Sidebar.scss";

const { Sider } = Layout;


const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('/register');


  useEffect(() => {
    let paths = location.pathname;
    setSelectedKey(paths);
  }, [location.pathname])

  const handleMenuClick = (key) => {
    navigate(key);
  };
  const handleToggle = () => {
    setCollapsed(!collapsed);
    if (!collapsed) {
      const element = document.querySelector('.ant-modal');
      element?.style.setProperty('margin-left', '80px');
    } else {
      const element = document.querySelector('.ant-modal');
      element?.style.setProperty('margin-left', '240px');
    }
  }

  const isAuthRoute = location.pathname.includes("register") ||
    location.pathname.includes("about-us") ||
    location.pathname.includes("how-koboldo-works");

  const isLogin = location.pathname.includes("/login");

  const menuItems = useMemo(() => {
    const list = isAuthRoute ? AuthRoutesList : AppRoutesList;
    return list.map(el => {
      if (el.children) {
        el.children.map(el => {
          if (el.isdisabled && location.pathname === el.key) {
            el.disabled = false;
            return el;
          }
          if (el.isdisabled && location.pathname !== el.key) {
            el.disabled = true;
            return el;
          }
        })
      }
      return el;
    })
  }, [isAuthRoute, location.pathname, AuthRoutesList, AppRoutesList]);

  const isDisabled = isLogin;

  return (
    <Sider
      width="240px"
      breakpoint="lg"
      className="sider"
      collapsedWidth="80px"
      collapsed={collapsed}
      onCollapse={setCollapsed}
    >
      <div className="sider-header">
        <div className={`toggle-menu ${!collapsed ? "" : "fix-collapse"}`} onClick={handleToggle}>
          <img src="./icons/menu.svg" alt="ERROR" />
        </div>
        <div className={`app-logo ${!collapsed ? "" : "hidden"}`}>
          <img src="./icons/logo.svg" alt="ERROR" />
        </div>
      </div>
      <Menu
        mode="inline"
        items={menuItems}
        className="sider-menu"
        defaultOpenKeys={['/registers']}
        selectedKeys={[selectedKey]}
        onClick={({ key }) => handleMenuClick(key)}
      />
    </Sider>
  );
};

export default Sidebar;
