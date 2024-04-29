import { useRoutes } from "react-router-dom";
import "./styles/_main.scss";
import { routes } from "./routes";

function App() {
  return useRoutes(routes);
}

export default App;
