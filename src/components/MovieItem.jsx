import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'


function MovieItem({item, handleDelete}) {
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color='grey' size = {13} />
        </button>
        <b className="text-display bolded">{item.name}</b>
        <div className="text-display">{item.review}</div>
    </Card>
  )
}

MovieItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default MovieItem
