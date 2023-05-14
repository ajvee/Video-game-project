import { Link } from "react-router-dom";

function getColor(score) {
  let color = "";
  if (score > 81) {
    color = "green";
  } else if (score >= 60 && score <= 79) {
    color = "yellow";
  } else {
    color = "red";
  }
  return color;
}

function Game({ game }) {
  return (
    <tr>

      <td className="score"><span style={{ color: getColor(game.score) }}>{game.score}</span></td>
      <td className="title">
        <Link to={`/games/${game.id}`}
        >
          {game.title}
        </Link>
      </td>
      <td className="genre">{game.genre}</td>
      <td className="rated">{game.rated}</td>
      <td className="platform">{game.platform}</td>
      <td className="date">{game.release_date}</td>
    </tr>
  );
}

export default Game;