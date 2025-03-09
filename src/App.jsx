import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./component/Layout/DefaultLayout/index";
import { publicRoutes } from "./component/Routers/index";
import { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if (!user) return <Navigate to="/login" replace={true} />;
  return <Outlet />;
};

const LoginProtect = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if (user) return <Navigate to="/dashboards" replace={true} />;
  return <Outlet />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const protectedRoute = route.protectedRoute;
            const protectedLogin = route.unauthorized;
            console.log(protectedRoute);
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            if (!protectedRoute && !protectedLogin) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              );
            } else if (protectedRoute) {
              return (
                <Route element={<ProtectedRoute />}>
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  ></Route>
                </Route>
              );
            } else if (protectedLogin) {
              return (
                <Route element={<LoginProtect/>}>
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  ></Route>
                </Route>
              );
            }
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
