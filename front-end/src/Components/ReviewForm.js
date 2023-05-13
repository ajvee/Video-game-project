import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"


export default function ReviewForm(props) {
const { id } = useParams()
const {reviewDetails} = props

const [review, setReview] = useState({
    id: "",
    content: "",
    title: "",
    user_score: "",
    reviewer: "" ,
    game_id: id,
})

const handleTextChange = (event) => {
    setReview({...review, [event.target.id]: event.target.value})
}

useEffect(() => {
    if (reviewDetails){
        setReview(reviewDetails)
    }
}, [id, reviewDetails, props])


const handleSubmit = (event) => {
    event.preventDefault()
    props.handleEdit(review,id)
    if (reviewDetails) {
        props.toggleView()
    }
    setReview({
    id: "",
    content: "",
    title: "",
    user_score: "",
    reviewer: "" ,
    game_id: id,
    })
}

// console.log(props.review)
  return (

<div>
    {props.children}
  <form onSubmit={handleSubmit}>
      <div class="form-group">
    <label htmlfor="reviewer">Name: </label>
    <input 
    id="reviewer" 
    type="text" 
    value={review.reviewer} 
    onChange={handleTextChange} 
    class="form-control" 
    required
    />
    </div>

    <div class="form-group">
    <label htmlfor="title">Title: </label>
    <input 
    id="title" 
    type="text" 
    value={review.title} 
    onChange={handleTextChange} 
    class="form-control" 
    required
    />
    </div>

    <div class="form-group">
    <label htmlfor="user_score">Score: </label>
    <input 
    id="user_score" 
    type="number" 
    name="rating"
    min="0"
    max="100"
    placeholder="Please rate from 0-100"
    value={review.user_score} 
    onChange={handleTextChange} 
    class="form-control" 
    required
    />
  </div>

  <div class="form-group">
    <label htmlfor="content">Review: </label>
    <input 
    id="content" 
    type="text" 
    value={review.content} 
    onChange={handleTextChange} 
    class="form-control" 
    required
    />
  </div>
  
  <input type="submit" />
    </form>
    </div>
  )
}
