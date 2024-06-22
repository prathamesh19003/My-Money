import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className="title">myMoney</li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
