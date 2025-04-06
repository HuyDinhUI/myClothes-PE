import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./component/Layout/DefaultLayout/index";
import Home from "./component/Pages/Home";
import ShopLayout from "./component/Layout/ShopLayout";
import Shop from "./component/Pages/Shop";
import Product from "./component/Pages/Product";
import DashBoardLayout from "./component/Layout/DashboardLayout";
import Dashboards from "./component/Pages/Dashboards";
import Login from "./component/Pages/Login";
import ProtectedRoute from "./component/Routers/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
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
            path="/dashboards"
            element={
              <ProtectedRoute>
                <DashBoardLayout>
                  <Dashboards />
                </DashBoardLayout>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
