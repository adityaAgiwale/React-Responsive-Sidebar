import { ImCross } from "react-icons/im";
import { useGloabalContext } from "./context";
import "./styles.css";

export default function Model() {
  const { isModelOpen, modelClose } = useGloabalContext();
  return (
    <main className="modelCenter">
      <div className={`${isModelOpen ? "show-model-box" : " model-box"}`}>
        <h2 className="modelBoxContent">Model Content here</h2>
        <ImCross className="modelCancelButton" onClick={modelClose} />
      </div>
    </main>
  );
}
