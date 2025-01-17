import { createBrowserRouter } from "react-router-dom";
import { Adminlayout, Homelayout } from "../Components";
import Homepage from "../Pages/Homepage";
import Home from "../Pages/Admindashboardpage/Home";
import Stafflayout from "../Components/Layout/Stafflayout";
import Staffhome from "../Pages/Staffdashboardpage/Staffhome";
import TransactionHistory from "../Pages/Admindashboardpage/TransactionHistory";
import SignupOptionPage from "../Pages/Auth/SignupOptionPage";
import SigninOptionPage from "../Pages/Auth/SigninOptionPage";
import AdminSignup from "../Pages/Auth/AdminSignup";
import StaffSignup from "../Pages/Auth/StaffSignup";
import AdminLogin from "../Pages/Auth/AdminLogin";
import StaffLogin from "../Pages/Auth/StaffLogin";

export const Element = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Adminlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "staffs",
        element: <div>staffs</div>,
      },
      {
        path: "payments",
        element: <div>payment</div>,
      },
      {
        path: "financials",
        element: <div>financials</div>,
      },
      {
        path: "settings",
        element: <div>settings</div>,
      },
      {
        path: "notifications",
        element: <div>notifications</div>,
      },
      {
        path: "transaction-history",
        element: <TransactionHistory />,
      },
    ],
  },
  {
    path: "/staff",
    element: <Stafflayout />,
    children: [
      {
        index: true,
        element: <Staffhome />,
      },
    ],
  },
  {
    path: "/signupoption",
    element: <SignupOptionPage />,
  },
  {
    path: "/signinoption",
    element: <SigninOptionPage />,
  },
  {
    path: "/companysignup",
    element: <AdminSignup />,
  },
  {
    path: "/staffsignup",
    element: <StaffSignup />,
  },
  {
    path: "/companysignin",
    element: <AdminLogin />,
  },
  {
    path: "/stafflogin",
    element: <StaffLogin />,
  },
]);
