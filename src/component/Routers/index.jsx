import Home from '../Pages/Home/index'
import Shop from '../Pages/Shop/index'
import Product from '../Pages/Product/index'
import ShopLayout from '../Layout/ShopLayout';
import Login from '../Pages/Login';
import Dashboards from '../Pages/Dashboards'
import DashBoardLayout from '../Layout/DashboardLayout/index'


const publicRoutes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/shop",
      component: Shop,
      layout:ShopLayout
    },
    {
      path:"/product",
      component:Product,
    },
    {
      path:"/login",
      component:Login,
      layout: null,
      unauthorized: true
    },
    {
      path:"/dashboards",
      component:Dashboards,
      protectedRoute: true,
      layout:DashBoardLayout
    }
  
  ];
  
  const privateRoutes=[
  
  ]
  
  export {publicRoutes,privateRoutes}