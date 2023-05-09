import { Link } from "react-router-dom";
// import "../CSS/Nav.css"

function Nav() {
  return (
    <nav>
      <h1>
        <Link to="/">The Tuner App</Link>
      </h1>
      <ul>
        <li>
          <Link to="/games">View All Songs</Link>
        </li>

        <li>
          <Link to="/games/review">Add New Song</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;