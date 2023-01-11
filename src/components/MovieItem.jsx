import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'


function MovieItem({item}) {
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close">
          <FaTimes color='grey' size = {13} />
        </button>
        <div className="text-display">{item.review}</div>
    </Card>
  )
}

MovieItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default MovieItem
