import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
        height: "",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
