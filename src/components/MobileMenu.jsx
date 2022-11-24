import React from "react";
import { NavLink } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import sidebarData from "./sidebarData";

const MobileMenu = ({ toggleDrawer, drawer, onClose }) => {
  return (
    <>
      <SwipeableDrawer
        anchor={"right"}
        open={drawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className="flex justify-between pl-4 pr-4 items-center w-full ">
          <h2 className="text-2xl font-semibold mb-4  mt-5 root-font">Menu</h2>
          <button
            className="text-red-500 bg-white shadow-sm p-1 hover:bg-gray-100 hover:text-red-600"
            onClick={() => onClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col divide-y  divide-gray-200 border-t border-b border-gray-200 text-sm font-medium text-gray-500 h-full bg-gray-300">
          <div className="">
            {sidebarData &&
              sidebarData.map(({ name, icon }) => {
                return (
                  <NavLink
                    key={name}
                    to={`/${name}`}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center px-6 py-3 bg-gray-700 text-white w-full"
                        : "flex items-center px-6 py-3 w-full  bg-gray-300"
                    }
                    onClick={() => onClose()}
                  >
                    <img className="mr-3" src={icon} alt={name} />
                    <p>{name}</p>
                  </NavLink>
                );
              })}
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default MobileMenu;
