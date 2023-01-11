import React from 'react'
import MovieItem from './MovieItem'
import PropTypes from 'prop-types'


function MovieList({movie}) {
    if (!movie || movie.length === 0) {
        return <p>No movies logged yet.</p>
    }
  return (<div className = 'feedback-list'>
    {movie.map((item)=>(
        <MovieItem key = {item.id} item = {item}/>
    ))}
  </div>
  )
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      review: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )

}
export default MovieList
