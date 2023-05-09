import { useState, useEffect } from "react";
import Game from "./Game";
// import "../CSS/Index.css"

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/games`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Game">
      <table className="Games">
        <thead>
          <tr>
            <th className="Games-header">#</th>
            <th className="Games-header">Title</th>
            <th className="Games-header">Genre</th>
            <th className="Games-header">Rated</th>
            <th className="Games-header">Platform</th>
            <th className="Games-header">Release Date</th>
          </tr>
        </thead>
        <tbody>
          {games
            ? games.map((game) => {
                return <Game key={game.id} game={game} />;
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default Games;