import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
// import Reviews from "./Reviews"

const API = process.env.REACT_APP_API_URL

function GameDetails() {

const [game, setGame] = useState()
const {id} = useParams()
let navigate = useNavigate()

//fetch data 
useEffect(() => {
    axios
    .get(`${API}/games/${id}`)
    .then((response) => {
        setGame(response.data)
    }).catch((e) => {
        console.warn("catch", e)
    })
}, [id,])

//delete func
const deleteGame = () => {
    axios.delete(`${API}/games/${id}`)
    .then(() => {
        navigate(`/games`)
    },
     (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c))
}

//handling the delete
const handleDelete = () => {
    deleteGame()
}


//rated, title, genre, platform, release_date
  return (
    <div class="card" style="width:400px">
    <img class="card-img-top" src="img_avatar1.png" alt="Card image">
    <div class="card-body">
      <h2 class="card-title"> {game.title} </h2>
      <h4> {game.rated} </h4>
      <h4>{game.genre} </h4>
      <h4> {game.platform} </h4>
      <h4> {game.release_date} </h4>
      <p class="card-text">{game.content}</p>
      <a href="#" class="btn btn-primary">See Profile</a>
      <div>
        
          <Link to={`/games`} >
          <button>Back</button>
          </Link>
        </div>

        <div>
          <Link to={`/games/${id}/edit`}>
          <button>Edit</button>
          </Link>
        </div>

        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
    )}


export default GameDetails;
