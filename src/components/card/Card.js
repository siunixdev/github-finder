import React from 'react'
import './Card.sass'

const Card = ({ children }) => {
  return (
    <div className='card'>
      {children}
    </div>
  )
}

export default Card