import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";

const routes = [
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />,
      </>
    )
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <NavBar />
        <Movie />,
      </>
    )
  },
  {
    path: "/actors",
    element:( 
    <>
    <NavBar/>
    <Actors />,
    </>
    )
  },
  {
    path: "/directors",
    element: (
    <>
    <NavBar />,
    <Directors />,
    </>
    )
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export default routes;

export const browserRouter = createBrowserRouter(routes);
