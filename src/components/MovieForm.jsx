import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function MovieForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Reviews must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newMovie = {
                text,
                rating,
            }
            handleAdd(newMovie)
        //handleAdd(newMovie)
        //setBtnDisabled(true)
        //setRating(10)
            setText('')
    }
        
        
    }
  return (
    <Card> 
        <form onSubmit={handleSubmit}>
            <h2>How did you find your latest movie?</h2>
            <RatingSelect select = {(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Movie Name"/>

            </div>  
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review"/>
                <Button type="submit" version="primary"
                 isDisabled = {btnDisabled}>Log</Button>
            </div>
            {message && <div className='message'>
                {message}
                </div>}
        </form>
    </Card>
  )
}

export default MovieForm
