
import { useState } from "react";
import ReviewForm from "./ReviewForm";

function getColor(score) {
    let color = "";
    if (score > 81) {
      color = "green";
    } else if (score >= 60 && score <= 80) {
      color = "yellow";
    } else {
      color = "red";
    }
    return color;
}
  
export default function Review({ review, handleDelete, handleEdit }) {
    const [viewEditFrom, toggleEditForm] = useState(false);

    const toggleView = () => {
        toggleEditForm(!viewEditFrom);
    };

    

    return (
        <div className="Review">
            
            <br></br>
            <br></br>
            <button onClick={toggleView}>Edit this review...</button>
            {viewEditFrom ?
                (
                    <ReviewForm
                        reviewDetails={review}
                        toggleView={toggleView}
                        handleEdit={handleEdit} />
                ) : (
                    <div>
                        <h4>{review.title}</h4>
                        <h4>Score - <span style={{ color: getColor(review.user_score) }}>{review.user_score}</span></h4>
                        <h5>{review.reviewer}</h5>
                        <p>{review.content}</p>
                        <button onClick={() => handleDelete(review.id)}>Delete</button>
                    </div>
                )}
        </div>
    )
};