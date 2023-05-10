import { Link } from "react-router-dom"

export default function FourOFour() {
  return (
    <div>
        
        <h1>Sorry, the game you chose can not be found at this time!</h1>
        <button>
            <Link to="/games">
            Back To List Of Games
            </Link>
        </button>
        
        </div>
  )
}
