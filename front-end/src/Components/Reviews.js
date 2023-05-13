import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review"
import ReviewForm from "./ReviewForm";

const API = process.env.REACT_APP_API_URL;

export default function Reviews() {
    const [showAddReview, setShowAddReview] = useState(false);
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API}/games/${id}/reviews`)
            .then((res) => {
                setReviews(res.data);
                console.log(res);
            })
    }, [id]);

    const handleClick = () => {
        setShowAddReview(!showAddReview);
      };

    const handleAdd = (newReview) => {
        axios.post(`${API}/games/${id}/reviews`, newReview)
            .then((res) => {
                setReviews([res.data, ...reviews])
            },
                (err) => console.error(err))
            .catch((err) => console.warn("catch", err))
    };

    const handleDelete = (id) => {
        axios.delete(`${API}/games/${id}/reviews/${id}`)
            .then((res) => {
                const copyReviewArray = [...reviews];
                const indexDeletedReview = copyReviewArray.findIndex((review) => {
                    return review.id === id;
                });
                copyReviewArray.splice(indexDeletedReview, 1);
                setReviews(copyReviewArray);
            },
                (error) => console.error(error)
            )
            .catch((err) => console.warn("catch", err))
    };

    const handleEdit = (updatedReview) => {
        axios.put(`${API}/games/${id}/reviews/${updatedReview.id}`, updatedReview)
            .then((res) => {
                const copyReviewArray = [...reviews];
                const indexUpdatedReview = copyReviewArray.findIndex((review) => {
                    return review.id === updatedReview.id;
                });
                console.log(copyReviewArray[indexUpdatedReview]);
                copyReviewArray[indexUpdatedReview] = res.data;
                console.log(res.data);
                setReviews(copyReviewArray);
            })
            .catch((err) => console.warn("catch", err))
    };
    


    return (
        
        <section className="Reviews">
            <br></br>
            <button onClick={handleClick}>
          {showAddReview ? "Hide Form" : "Add New Review"}
        </button>
        {showAddReview && (
          <ReviewForm handleAdd={handleAdd}>
            <h5>Add a New Review</h5>
          </ReviewForm>
        )}
            {
                reviews.map((review) => {
                    return <Review
                        key={review.id}
                        review={review}
                        handleDelete={handleDelete}
                        handleSubmit={handleEdit} />
                })
            }
        </section>
    )
};
