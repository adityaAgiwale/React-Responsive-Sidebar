import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useGloabalContext } from "./context";
import "./styles.css";

export default function Home() {
  const { sidebarOpen, modelOpen } = useGloabalContext();

  return (
    <main>
      <div className="home-center">
        <HiOutlineMenuAlt3 className="menuIcon" onClick={sidebarOpen} />
      </div>
      <div className="modelButton">
        <button className="openModelButton" onClick={modelOpen}>
          Open Model
        </button>
      </div>
    </main>
  );
}
