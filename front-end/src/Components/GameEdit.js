import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

const API = process.env.REACT_APP_API_URL

export default function GameEdit() {

let {id} = useParams()
let navigate = useNavigate()

const [game, setGame] = useState({
    
})

  return (
    <div>GameEdit</div>
  )
}
