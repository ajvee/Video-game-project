import { Link } from "react-router-dom";

function Game({ game }) {
  return (
    <tr>
      <td>{game.id}</td>
      <td>
        <Link to={`/games/${game.id}`}
        >
          {game.title}
        </Link>
      </td>
      <td>{game.genre}</td>
      <td>{game.rated}</td>
      <td>{game.platform}</td>
      <td>{game.release_date}</td>
    </tr>
  );
}

export default Game;