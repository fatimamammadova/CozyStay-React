import NotFound from "./NotFound";
import Home from "./pages/Home/Home";
import Pages from "./pages/Pages/Pages";
import Rooms from "./pages/Rooms/Rooms";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
  {
    path: "/pages",
    element: <Pages />,
  },
  {
    path: "*",
    element: <NotFound/>
  }
];
