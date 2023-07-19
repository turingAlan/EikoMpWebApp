import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import routeList from "./helpers/routes/route";
// import { Login } from "./pages/LoginPage";

function App() {
  const router = createBrowserRouter(
    routeList.map((route) => {
      return {
        path: route.path,
        element: <route.component />,
      };
    })
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
