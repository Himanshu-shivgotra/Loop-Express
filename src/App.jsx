import './App.css'
import { createBrowserRouter, Outlet } from "react-router-dom"

import MegaMenuComp from './Components/MegaMenuComp'
// import HeaderComp from './CommonComponents/HeaderComp/HeaderComp'
import Home from './Components/Home/Home'
import Footer from './CommonComponents/Footer'
import Register from './CommonComponents/HeaderComp/Register'

function App() {

  return (
    <>
      <MegaMenuComp />
      <Outlet />
      <Footer />
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
    ]
  },
  {
    path: "/register",
    element: <Register />,
  }

])

export default appRouter;
