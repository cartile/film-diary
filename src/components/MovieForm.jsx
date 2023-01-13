import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function MovieForm() {
    const [text, setText] = useState("")
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 8) {
            setBtnDisabled(true)
            setMessage('Reviews must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
  return (
    <Card> 
        <form>
            <h2>How did you find your latest movie?</h2>
            <RatingSelect select = {(rating) => setRating(rating)}/>
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
