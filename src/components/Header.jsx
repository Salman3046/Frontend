import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };
  return (
    <>
      <header className="min-h-full">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-1">
          <div className="grid grid-cols-12">
            <div className="col-span-3 lg:col-span-2 flex justify-end">
              <Link to="/projects">
                <img
                  className="logo"
                  src="/assets/images/logo/logo.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="col-span-7 lg:col-span-9 flex items-center justify-between heading-line">
              <div>
                <h1 className="logo-heading">Ramaera industries</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="rounded-full p-1 text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    {/* <!-- Heroicon name: outline/bell --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button>

                  {/* <!-- Profile dropdown --> */}
                  <div className="relative ml-3">
                    <select className="form-select appearance-none bg-transparent block w-full py-1.5 text-base font-normal transition ease-in-out">
                      <option>English(UK)</option>
                      <option className="bg-blue-300" value="1">
                        France
                      </option>
                      <option className="bg-blue-300" value="2">
                        German
                      </option>
                      <option className="bg-blue-300" value="3">
                        Spanish
                      </option>
                    </select>

                    <div
                      id="dropdownDivider"
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDividerButton"
                      >
                        <li>
                          <a
                            href="/"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            German
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            French
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Hindi
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex items-center lg:hidden">
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={() => setDrawer(true)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-10 h-10"
                  aria-hidden="true"
                  fill="#ffffff"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <MobileMenu
          toggleDrawer={toggleDrawer}
          drawer={drawer}
          onClose={() => setDrawer(false)}
        />
      </header>
    </>
  );
};

export default Header;
