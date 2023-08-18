import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul style={{}}>
        <li>
          <Link to="/simple">Simple Counter</Link>
        </li>
        <li>
          <Link to="/complex">Complex Counter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
