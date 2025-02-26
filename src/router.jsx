import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import CourseManagement from "./Pages/CourseManagement";
import TrainerManagement from "./Pages/TrainerManagement";
import Payments from "./Pages/Payments";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true , element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'course', element: <CourseManagement /> },
      { path: 'trainer', element: <TrainerManagement /> },
      { path: 'payment', element: <Payments /> },
    ]
  },
])