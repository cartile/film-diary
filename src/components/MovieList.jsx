import React from 'react'
import MovieItem from './MovieItem'
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'


function MovieList({movie, handleDelete}) {
    if (!movie || movie.length === 0) {
        return <p>No movies logged yet.</p>
    }
  return (<div className = 'feedback-list'>
    <AnimatePresence>
    {movie.map((item)=>(
        <motion.div 
          key={item.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit = {{opacity:0}}
          >

        <MovieItem
        key = {item.id} 
        item = {item}
        handleDelete={handleDelete}/>
        </motion.div>
    ))}
    </AnimatePresence>
  </div>
  )
  
      /*
  return (<div className = 'feedback-list'>
    {movie.map((item)=>(
        <MovieItem
        key = {item.id} 
        item = {item}
        handleDelete={handleDelete}/>
    ))}
  </div>
  ) 
} 
*/
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      review: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  )

}
export default MovieList
