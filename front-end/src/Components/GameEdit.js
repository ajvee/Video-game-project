import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

export default function GameEdit() {

let {id} = useParams()
let navigate = useNavigate()

const [game, setGame] = useState({
    title: "",
    rated: "",
    genre: "",
    platform: "",
    release_date: "",
    game_content: "",
    score: "",
})


const updateGame = (updatedGame) => {
    axios
    .put(`${API}/games/${id}`, updatedGame)
    .then(() => {
        navigate(`/games/${id}`)
    },
        (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c))
}

const handleTextChange = (event) => {
    setGame({...game, [event.target.id]: event.target.value})
}

useEffect(() => {
    axios
    .get(`${API}/games/${id}`)
    .then((response) => setGame(response.data),
    (error) => navigate(`/not-found`)
    )
}, [id, navigate])


const handleSubmit = (event) => {
    event.preventDefault()
    updateGame(game, id)
}


  return (

    <>
    <div>
        <h1> {game.title}</h1>
         <h1> {game.score} </h1> 
    </div>


      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="title">Title: </label>
    <input 
    id="title" 
    type="text" 
    value={game.title} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />


  </div>
  <div className="form-group">
    <label htmlFor="rated">Rated: </label>
    <input   
    id="rated" 
    type="text" 
    value={game.rated} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />
  </div>

  <div className="form-group">
    <label htmlFor="genre">Genre: </label>
    <input 
    id="genre" 
    type="text" 
    value={game.genre} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />
  </div>


  <div className="form-group">
    <label htmlFor="platform">Platform: </label>
    <input 
    id="platform" 
    type="text" 
    value={game.platform} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />
  </div>


  <div className="form-group">
    <label htmlFor="release_date">Release Date: </label>
    <input 
    id="release_date" 
    type="text" 
    value={game.release_date} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />
  </div>


  <div className="form-group">
    <label htmlFor="game_content">Game Content: </label>
    <input 
    id="game_content" 
    type="text" 
    value={game.game_content} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />
  </div>


  <div className="form-group">
    <label htmlFor="score">Score: </label>
    <input 
    id="score" 
    type="number" 
    value={game.score} 
    onChange={handleTextChange} 
    className="form-control" 
    required
    />
  </div>

<br></br>
<input type="submit" />
</form>
<Link to={`/games/${id}`}>
        <button>Back to Games</button>
      </Link>
    </>
  )
}
