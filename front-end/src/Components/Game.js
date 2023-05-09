import { Link } from "react-router-dom";

function Game({ game }) {
  return (
    <tr>
      <td>{game.id}</td>
      <td>
        <Link
          to={`/games/${game.id}`}
          
        >
          {game.name}
        </Link>
      </td>
      <td>{game.artist}</td>
      <td>{game.album}</td>
      <td>{game.time}</td>
      <td>
        {game.is_favorite ? <span> ⭐️ </span> : <span> &nbsp;&nbsp; </span>}
      </td>
    </tr>
  );
}

export default Game;