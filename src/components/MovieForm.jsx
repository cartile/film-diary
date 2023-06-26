import React, { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { v4 as uuidv4 } from 'uuid';

function MovieForm({ handleAdd }) {
  const [movieName, setMovieName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleMovieNameChange = (e) => {
    const text = e.target.value;
    setMovieName(text);
    handleValidation(text, reviewText);
  };

  const handleReviewTextChange = (e) => {
    const text = e.target.value;
    setReviewText(text);
    handleValidation(movieName, text);
  };

  const handleValidation = (name, review) => {
    if (name === '' || review === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (review.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Reviews must be at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (reviewText.trim().length > 10) {
      const newMovie = {
        id: uuidv4(),
        rating,
        name: movieName, 
        review: reviewText,
      };
      handleAdd(newMovie);
      setMovieName('');
      setReviewText('');
    }
  };

  return (
    <Card>
    <form onSubmit={handleSubmit}>
    <h2>How did you find your latest movie?</h2>
    <RatingSelect select={(rating) => setRating(rating)} />
    <div className="input-group">
        <label htmlFor="movieNameInput">Movie Name</label>
        <input
            id="movieNameInput"
            onChange={handleMovieNameChange}
            type="text"
            placeholder="Enter the movie name"
            value={movieName}
        />
    </div>
    <div className="input-group">
        <label htmlFor="reviewTextInput">Write a review</label>
        <input
            id="reviewTextInput"
            onChange={handleReviewTextChange}
            type="text"
            placeholder="Write a review"
            value={reviewText}
        />
    <Button type="submit" version="primary" isDisabled={btnDisabled}>
    Log
    </Button>
    </div>
        {message && <div className='message'>{message}</div>}
    </form>
    </Card>
);
}

export default MovieForm;

