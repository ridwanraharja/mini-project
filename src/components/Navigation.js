import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      {" "}
      <span className="font-bold font-xl">The Menu</span>
      <ul>
        <li>
          <Link to="/" className="text-blue-500" onClick={props.setShowMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="text-blue-500"
            onClick={props.setShowMenu}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-blue-500"
            onClick={props.setShowMenu}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
