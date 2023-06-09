import axios from "axios";
import { useState, useEffect } from "react";
import Game from "./Game";
import Footer from "./Footer";
import "../Css/GameIndex.css"

const API = process.env.REACT_APP_API_URL;


function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(`${API}/games`)
      .then((response) => setGames(response.data))
      .catch((err) => console.warn("catch", err));
  }, []);

  return (
    <div className="Game">
      <table className="Games">
        <thead>
          <tr>
            <th className="Games-header">Score</th>
            <th className="Games-header">Title</th>
            <th className="Games-header">Genre</th>
            <th className="Games-header">ESRB Rating</th>
            <th className="Games-header">Platform</th>
            <th className="Games-header">Year Released</th>
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
      <Footer />
    </div>
  );

}

export default Games;