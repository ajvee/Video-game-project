import { Link } from "react-router-dom";
import "../Css/Nav.css"

function Nav() {
  return (
    <nav>
      <h1>
        <Link to="/">4 Gamers</Link>
      </h1>
      <ul>
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