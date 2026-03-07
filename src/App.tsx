import { RouterProvider, createBrowserRouter } from "react-router";
import "./App.css";
import PROJECT_ROUTES from "./routes";

function App() {
  const router = createBrowserRouter(PROJECT_ROUTES);
  return <RouterProvider router={router} />;
}

export default App;
