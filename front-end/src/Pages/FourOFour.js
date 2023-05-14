import { Link } from "react-router-dom";
import "../Css/FourOFour.css";

export default function FourOFour() {
  return (
    <div className="container-two">
      <div className="back-home">
        <h1>Back Home</h1>
        <button>
          <Link to="/games" style={{ color: "black", textDecoration: "none" }}>
            Back To Index Page
          </Link>
        </button>
      </div>
    </div>
  );
}
