import Home from "./components/home/home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Test from "./test/test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/test",
    element: <Test/>
  },
]);

function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
