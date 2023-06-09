import axios from "axios"
import { useState } from "react"
import { useNavigate, Link  } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

export default function GameNew() {
let navigate = useNavigate()

const addGame = (newGame) => {
    axios
      .post(`${API}/games`, newGame)
      .then(
        () => {
          navigate(`/games`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };
  

  const [game, setGame] = useState({
    title: "",
    rated: "",
    genre: "",
    platform: "",
    release_date: "",
    game_content: "",
    score: "",
})

const handleTextChange = (event) => {
    setGame({...game, [event.target.id]: event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault()
    addGame(game)
}

  return (
    <div>
         <form onSubmit={handleSubmit}>
  <div class="form-group1">
    <label for="title">Title: </label>
    <input 
    id="title" 
    type="text" 
    value={game.title} 
    onChange={handleTextChange} 
    placeholder="Name of game"
    class="form-control" 
    required
    />


  </div>
  <div class="form-group">
    <label for="rated">Rated: </label>
    <input   
    id="rated" 
    type="text" 
    value={game.rated} 
    onChange={handleTextChange} 
    placeholder="Rated E/E10+/T/M/A"
    class="form-control" 
    required
    />
  </div>

  <div class="form-group">
    <label for="genre">Genre: </label>
    <input 
    id="genre" 
    type="text" 
    value={game.genre} 
    onChange={handleTextChange} 
    placeholder="What genre"
    class="form-control" 
    required
    />
  </div>


  <div class="form-group">
    <label for="platform">Platform: </label>
    <input 
    id="platform" 
    type="text" 
    value={game.platform} 
    onChange={handleTextChange} 
    placeholder="What game console"
    class="form-control" 
    required
    />
  </div>


  <div class="form-group">
    <label for="release_date">Release Date: </label>
    <input 
    id="release_date" 
    type="text" 
    value={game.release_date} 
    onChange={handleTextChange}
    placeholder="Year" 
    class="form-control" 
    required
    />
  </div>


  <div class="form-group">
    <label for="game_content">Game Description: </label>
    <input 
    id="game_content" 
    type="text" 
    value={game.game_content} 
    onChange={handleTextChange} 
    placeholder="Description of game"
    class="form-control" 
    required
    />
  </div>


  <div class="form-group">
    <label for="score">Score: </label>
    <input 
    id="score" 
    type="number" 
    value={game.score} 
    onChange={handleTextChange} 
    placeholder="Rating from 0-100"
    class="form-control" 
    required
    />
  </div>

<br></br>
<input type="submit" />
</form>
<Link to={`/games`}>
        <button>Back to Games</button>
      </Link>
    </div>
  )
}
