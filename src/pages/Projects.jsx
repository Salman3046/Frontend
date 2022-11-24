import React from "react";
import { Link } from "react-router-dom";
import allProjects from "../projects.json";

const Projects = () => {
  return (
    <>
      <div className="col-span-12 lg:col-span-9">
        <div className="flex items-center">
          <h1 className="main-title">Projects</h1>
          <img
            className="ml-2"
            src="/assets/images/icons/edit.png"
            alt="projects"
          />
        </div>
        <div className="mt-5 overflow-x-auto w-full">
          <table className="w-full">
            <thead className="flex text-white w-full">
              <tr className="capitalize flex w-full mb-4">
                <th className="px-3 py-3 p-4 w-1/3" width="120">
                  Name
                </th>
                <th className="px-3 py-3 p-4 w-1/3">About</th>
                <th className="px-3 py-3 p-4 w-1/3">Status</th>
              </tr>
            </thead>
            <tbody
              className="divide-y flex flex-col items-center justify-between w-full"
              id="outlet"
            >
            {/* iterate all projects */}
              {allProjects &&
                allProjects.map(({ id, name, image, about, status }) => {
                  return (
                    <tr className="text-gray-100 py-4 flex w-full" key={id}>
                      <td className="px-3 py-3 p-4 w-1/3">
                        <div className="flex items-center leading-tight">
                          <div className="flex flex-col lg:flex-row items-center">
                            <img
                              src={image}
                              className="w-16 rounded-full"
                              alt={name}
                            />
                            <p className="ml-4">{name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 p-4 w-1/3">
                        <div className="flex items-center leading-tight description">
                          <p className="text-lg lg:text-sm">{about}</p>
                        </div>
                      </td>
                      <td className="px-3 py-3 p-4 w-1/3">
                        <div className="flex items-center justify-center leading-tight">
                          <p className="mr-3">{status}</p>
                          {status === "Active" && (
                            <Link
                              to={`/projects/${id}`}
                              className="ml-3 hover:text-yellow-400"
                            >
                              Bid
                            </Link>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Projects;
