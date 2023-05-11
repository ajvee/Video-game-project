import { useState } from "react";
import ReviewForm from "./ReviewForm";


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
                        <h4>{review.title} <span>{review.rating}</span></h4>
                        <h5>{review.reviewer}</h5>
                        <p>{review.content}</p>
                        <button onClick={() => handleDelete(review.id)}>Delete</button>
                    </div>
                )}
        </div>
    )
};