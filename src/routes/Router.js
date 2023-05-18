import { lazy } from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoutes from "../services/ProtectedRoutes.js";

const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

const Dashboard = lazy(() => import("../views/Dashbord.js"));
const About = lazy(() => import("../views/About.js"));
const ManageUser = lazy(() => import("../views/ui/ManageUser.js"));
const WorkQueue = lazy(() => import("../views/ui/WorkQueue.js"));
const Application = lazy(() => import("../views/ui/Application.js"));
const Profile = lazy(() => import("../views/ui/Profile.js"));
const Signin = lazy(() => import("../views/Pages/Singin.js"));
const Signup = lazy(() => import("../views/Pages/Signup.js"));

const ThemeRoutes = [
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <FullLayout />,
        children: [
          { path: "/", element: <Navigate to="/dashbord" /> },
          { path: "/dashbord", exact: true, element: <Dashboard /> },
          { path: "/about", exact: true, element: <About /> },
          { path: "/manage-user", exact: true, element: <ManageUser /> },
          { path: "/work-queue", exact: true, element: <WorkQueue /> },
          { path: "/application", exact: true, element: <Application /> },
          { path: "/profile", exact: true, element: <Profile /> },
        ],
      },
    ],
  },

  {
    path: "/",
    children: [
      { path: "/", element: <Navigate to="/signin" /> },
      { path: "/signin", exact: true, element: <Signin /> },
      { path: "/signup", exact: true, element: <Signup /> },
    ],
  },
];

export default ThemeRoutes;
