import { Link } from "react-router-dom";

function Game({ game }) {
  return (
    <tr>
      <td>{game.id}</td>
      <td>
      <Link to={`/games/${game.id}`} style={{ color: "black" }}>
          {game.title}
        </Link>
      </td>
      <td>{game.genre}</td>
      <td style={{textAlign: "center"}}>{game.rated}</td>
      <td>{game.platform}</td>
      <td style={{textAlign: "center"}}>{game.release_date}</td>
      <td style={{textAlign: "center"}}>{game.score}</td>
    </tr>
  );
}

export default Game;