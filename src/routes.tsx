import { Navigate, type RouteObject } from "react-router";
import {
  HOME_PATH,
  ROOT_PATH,
  TIMER_PATH,
  TODO_PATH,
  XOX_PATH,
} from "../constants";
import AuthProvider from "./providers/Auth";
import Home from "./Pages/Home";
import Timer from "./Pages/Timer";
import TicTacToe from "./Pages/TicTacToe";
import Todo from "./Pages/ToDo";

const PROJECT_ROUTES: RouteObject[] = [
  {
    path: ROOT_PATH,
    element: <AuthProvider />,
    children: [
      {
        path: ROOT_PATH,
        element: <Navigate to={HOME_PATH} replace />,
      },
      {
        path: HOME_PATH,
        element: <Home />,
      },
      {
        path: TIMER_PATH,
        element: <Timer />,
      },
      {
        path: XOX_PATH,
        element: <TicTacToe multiplesOf={3} />,
      },
      {
        path: TODO_PATH,
        element: <Todo />,
      },
    ],
  },
];

export default PROJECT_ROUTES;
