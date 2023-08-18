import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ol
        style={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          flexDirection: "row",
          gap: "20px",
          position: "fixed",
          top: "20px",
          flexWrap: "wrap",
        }}
      >
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/simple">Simple</Link>
        </span>
        <span>
          <Link to="/complex">Complex</Link>
        </span>
        <span>
          <Link to="/advanced">Advanced</Link>
        </span>
        <span>
          <Link to="/global">Global</Link>
        </span>
      </ol>
    </nav>
  );
};

export default Navbar;
