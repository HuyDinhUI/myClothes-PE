import Home from '../Pages/Home/index'
import Shop from '../Pages/Shop/index'
import Product from '../Pages/Product/index'
import ShopLayout from '../Layout/ShopLayout';

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
    }
  
  ];
  
  const privateRoutes=[
  
  ]
  
  export {publicRoutes,privateRoutes}