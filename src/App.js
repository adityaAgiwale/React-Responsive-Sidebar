import Home from "./home";
import Model from "./model";
import Sidebar from "./sidebar";
import "./styles.css";
import { useGloabalContext } from "./context";

export default function App() {
  const { sidebarClose, sidebarOpen } = useGloabalContext();

  return (
    <div className="App">
      <Home />
      <Model />
      <Sidebar />
    </div>
  );
}
