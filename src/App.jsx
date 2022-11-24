import Dashboard from "components/Dashboard";
import Loader from "components/Loader/Loader";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader loading={true} />}>
          <Routes>
            <Route exact path="/" element={<Dashboard />}>
              {routes &&
                routes.map((route) => {
                  return (
                    <Route
                      key={route.path}
                      path={`/${route.path}`}
                      element={route.element}
                      exact
                    />
                  );
                })}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
