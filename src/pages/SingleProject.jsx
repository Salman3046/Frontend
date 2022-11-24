import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import projects from "../projects.json";

const SingleProject = () => {
  // get id from searchbar
  const { id } = useParams();

  // people interest images
  const images = [
    {
      id: 101,
      image: "/assets/images/people/01.png",
    },
    {
      id: 102,
      image: "/assets/images/people/02.png",
    },
    {
      id: 103,
      image: "/assets/images/people/03.png",
    },
  ];
  //   memoize single project
  const project = useMemo(() => projects.find((pro) => pro.id === +id), [id]);
  return (
    <>
      <div className="col-span-12 lg:col-span-9">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <h1 className="main-title">{project?.name}</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <p className="mt-5 project-description">{project?.about}</p>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <img src={project?.image} alt={project?.name} />
              <div className="people-interest mt-4">
                <div className="grid grid-cols-2">
                  <div className="flex overflow-hidden mt-1 py-1 px-1">
                    {images &&
                      images.map(({ id, image }) => {
                        return (
                          <img
                            key={id}
                            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                            src={image}
                            alt=""
                          />
                        );
                      })}
                  </div>
                  <div>
                    <p className="count">500+</p>
                    <p className="desc text-sm lg:text-lg">
                      People are interested
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="people-interest mt-5 w-full lg:w-3/4 px-5 py-5">
            <div className="flex items-center justify-between count">
              <p>Total ₹1.5cr</p>
              <hr className="w-2/4" />
              <p>Now ₹80 lac</p>
            </div>
            <div className="flex justify-center items-center mt-2">
              <div className="w-3/4">
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="progress-bar h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <p className="ml-3">80%</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="primary-button">Place bid</button>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
