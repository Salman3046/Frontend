import React from "react";
import { NavLink } from "react-router-dom";
import sidebarData from "./sidebarData";

const Sidebar = () => {
  return (
    <div className="col-span-3 hidden lg:block">
      <div id="sidebar">
        {sidebarData &&
          sidebarData.map(({ name, icon }) => {
            return (
              <NavLink
                to={`/${name}`}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center w-3/4 px-3 py-6 mb-3 mt-3 active-sidebar-item"
                    : "flex items-center w-3/4 px-3 py-6 mb-3 mt-3 sidebar-item"
                }
                key={name}
              >
                <img className="mr-3" src={icon} alt={name} />
                <p>{name}</p>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
