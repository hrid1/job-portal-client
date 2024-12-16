import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import JobForm from "../pages/JobForm/JobForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Router NOt Found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/job/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`),
        element: (
          <PrivateRoutes>
            <JobDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/jobApply/:id",
        element: <JobApply />,
      },
      {
        path: "/my-application",
        element: <MyApplications />,
      },
      {
        path: "/add-jobs",
        element: <JobForm />,
      },
    ],
  },
]);
