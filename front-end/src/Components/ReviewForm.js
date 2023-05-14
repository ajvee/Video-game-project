import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

export default function ReviewForm(props) {
  const { id } = useParams();

  const [review, setReview] = useState({
    content: "",
    title: "",
    user_score: "",
    reviewer: "",
    game_id: id,
  })

  useEffect(() => {
    if (props.reviewDetails) {
      setReview(props.reviewDetails)
    }
  }, [id, props.reviewDetails])

  const handleTextChange = (event) => {
    setReview({...review, [event.target.id]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");

    if (props.handleAdd) {
      props.handleAdd(review);
    } else if (props.handleEdit) {
      props.handleEdit(review);
    }

    if (props.toggleView) {
      props.toggleView();
    }

    setReview({
      content: "",
      title: "",
      user_score: "",
      reviewer: "",
      game_id: id,
    })
  }

  return (
    <div>
      {props.children}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reviewer">Name: </label>
          <input 
            id="reviewer" 
            type="text" 
            value={review.reviewer} 
            onChange={handleTextChange} 
            placeholder="Your name"
            className="form-control" 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input 
            id="title" 
            type="text" 
            value={review.title} 
            onChange={handleTextChange} 
            placeholder="Name of game"
            className="form-control" 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="user_score">Score: </label>
          <input 
            id="user_score" 
            type="number" 
            name="rating"
            min="0"
            max="100"
            placeholder="Please rate from 0-100"
            value={review.user_score} 
            onChange={handleTextChange} 
            className="form-control" 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Review: </label>
          <input 
            id="content" 
            type="text" 
            value={review.content} 
            onChange={handleTextChange} 
            placeholder="Your thoughts"
            className="form-control" 
            required
          />
        </div>
  
        <input type="submit" />
      </form>
    </div>
  )
}
