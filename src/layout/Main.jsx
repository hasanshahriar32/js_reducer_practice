import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        height: "",
        width: "80vw",
      }}
    >
      <Navbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "space-between",
          width: "100%",
        }}
      />
      <Outlet
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      />
    </div>
  );
};

export default Main;
