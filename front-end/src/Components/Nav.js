import { Link } from "react-router-dom";
import "../Css/Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/home">4 Gamers</Link>
        </li>

        <li>
          <Link to="/games">View All Video Games</Link>
        </li>

        <li>
          <Link to="/games/new">Add New Video Games</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
