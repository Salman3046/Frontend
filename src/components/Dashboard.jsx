import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-1">
        <div className="grid grid-cols-12">
          {/* Sidebar */}
          <Sidebar />

          {/* Dashboard */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
