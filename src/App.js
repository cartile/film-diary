import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieData from './data/MovieData'
import { useState } from 'react'

function App() {
    const [movie, setMovie] = useState(MovieData)
    return (
        <>
        <Header />
        <div className = 'container'>
            <p>Track your movie viewing history.</p>
            <MovieList movie = {movie}/>
        </div>
    </>
    )
}

export default App