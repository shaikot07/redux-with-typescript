import App from "@/App";
import Main from "@/LayOut/Main";
import TaskPage from "@/pages/TaskPage/TaskPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <TaskPage></TaskPage>,
      },
      {
        path: "/counter",
        element: <App></App>,
      },
    ],
  },
]);
