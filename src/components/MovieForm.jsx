import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'

function MovieForm() {
    const [text, setText] = useState("")

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
  return (
    <Card> 
        <form>
            <h2>How did you find your latest movie?</h2>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review"/>
                <Button type="submit" version="primary">Log</Button>
            </div>
        </form>
    </Card>
  )
}

export default MovieForm
