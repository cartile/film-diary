import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieData from './data/MovieData'
import { useState } from 'react'
import RatingStats from './components/RatingStats'

function App() {
    const [movie, setMovie] = useState(MovieData)

    const deleteMovie = (id) => {
        if(window.confirm('Are you sure you want to delete this entry?'))
        setMovie(movie.filter((item)=> item.id !== id))
    }
    return (
        <>
        <Header />
        <div className = 'container'>
            <p>Track your movie viewing history.</p>
            <RatingStats movie = {movie}/>
            <MovieList movie = {movie} handleDelete={deleteMovie}/>
        </div>
    </>
    )
}

export default App