import React from 'react'
import Card from '../card/Card'
import './List.sass'
import { useNavigate } from 'react-router-dom'

const List = () => {
  const navigate = useNavigate()

  return (
    <div className='container mx-auto'>
      <div className='list'>
        <Card>
          <div className='list__body' onClick={() => navigate('/detail')}>
            <img
              src='https://avatars.githubusercontent.com/u/51237?v=4'
              className='list__image'
            />
            <span className='lits__name'>login Name</span>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default List