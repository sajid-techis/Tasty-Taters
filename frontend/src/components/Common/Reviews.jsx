import React, { useEffect, useState } from 'react';
import closeIcon from '../../assets/img/close-icon.png';
import API from '../../API';


const api = new API();

const Reviews = ({ selectedItemId, setSelectedItemId, setShowReviews }) => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

    useEffect(() => {
        if (selectedItemId !== null) {
            api.getReviews(selectedItemId)
                .then((reviews) => {
                    setSelectedItemId(null);
                    setReviews(reviews);
                })
                .catch((error) => {
                    console.error('Failed to fetch reviews:', error);
                });
        }
    }, [selectedItemId]); // Add selectedItemId as a dependency

   

    return (
        <div className="overlay">
            <div className="review-box">
                <div className="close">
                    <img src={closeIcon} alt="close" onClick={() => setShowReviews(false)} />
                </div>
                <div className="write-review">
                    <h2>Reviews for "American Food"</h2>
                </div>
                <ol>
                    {reviews && reviews.length > 0 && reviews.map((review) => (
                        <li key={review.id} className='review-list'>
                            <h3> Likes: {review.like_count}</h3>
                            <h3>Name: {review.name}</h3>
                            <p> <span style={{fontWeight:'bolder'}}>Review:</span> {review.body}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Reviews;
