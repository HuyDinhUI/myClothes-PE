import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const DefaultLayout = lazy(() =>
  import("./component/Layout/DefaultLayout/index.jsx")
);
const Home = lazy(() => import("./component/Pages/Home/index.jsx"));
const ShopLayout = lazy(() =>
  import("./component/Layout/ShopLayout/index.jsx")
);
const Shop = lazy(() => import("./component/Pages/Shop/index.jsx"));
const Product = lazy(() => import("./component/Pages/Product/index.jsx"));
const DashBoardLayout = lazy(() =>
  import("./component/Layout/DashboardLayout/index.jsx")
);
const Dashboards = lazy(() => import("./component/Pages/Dashboards/index.jsx"));
const Login = lazy(() => import("./component/Pages/Login/index.jsx"));

const Signup = lazy(() => import("./component/Pages/Signup/index.jsx"));

import ProtectedRoute from "./component/Routers/ProtectedRoute";
import { Triangle } from "react-loader-spinner";

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense
          fallback={
            <Triangle
              visible={true}
              height="80"
              width="80"
              color="var(--black)"
              ariaLabel="triangle-loading"
              wrapperStyle={{display: "flex", justifyContent: "center",alignItems: "center", height: "100vh"}}
              wrapperClass="Triangle"
            />
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <DefaultLayout>
                  <Home />
                </DefaultLayout>
              }
            />
            <Route
              path="/shop"
              element={
                <ShopLayout>
                  <Shop />
                </ShopLayout>
              }
            />
            <Route
              path="/product/:id"
              element={
                <DefaultLayout>
                  <Product />
                </DefaultLayout>
              }
            />
            <Route
              path="/dashboards/:page"
              element={
                <ProtectedRoute>
                  <DashBoardLayout>
                    <Dashboards />
                  </DashBoardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <DefaultLayout>
                  <Login />
                </DefaultLayout>
              }
            />
            <Route
              path="/signup"
              element={
                <DefaultLayout>
                  <Signup />
                </DefaultLayout>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
