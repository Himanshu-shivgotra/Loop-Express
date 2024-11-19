import './App.css'
import { createBrowserRouter, Outlet, } from "react-router-dom"

import MegaMenuComp from './Components/MegaMenuComp'
// import HeaderComp from './CommonComponents/HeaderComp/HeaderComp'
import Home from './Components/Home/Home'
import Footer from './CommonComponents/Footer'
import SignIn from './CommonComponents/HeaderComp/SignIn'
import SignUp from './CommonComponents/HeaderComp/SignUp'
import SellerRegister from './Components/SellerRegister/SelllerRegister'
import Admin from './Admin/Components/Admin'
import Customers from "./Admin/Components/Customers"
import AdminDashboard from "./Admin/Components/AdminDashboard"
import CreateProducts from './Admin/Components/CreateProducts'
import ProductTable from './Admin/Components/ProductsTable'
import OrdersTable from './Admin/Components/OrdersTable'


function App() {

  return (
    <>
      {/* <MegaMenuComp /> */}
      {/* <Outlet /> */}
      {/* <Footer /> */}
      {/* <Routes>
        <Route path='/admin/*' element={<AdminRouters />} />
      </Routes> */}
      <Admin />
    </>

  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/seller/register",
        element: <SellerRegister />,
      },
    ],
  },
  {
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/products/create",
        element: <CreateProducts />,
      },
      {
        path: "/admin/products",
        element: <ProductTable />,
      },
      {
        path: "/admin/orders",
        element: <OrdersTable />,
      },
      {
        path: "/admin/customers",
        element: <Customers />,
      },
    ]

  }

])

export default appRouter;
