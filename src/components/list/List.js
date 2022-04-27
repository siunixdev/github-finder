import React from 'react'
import Card from '../card/Card'
import './List.sass'

const List = () => {
  return (
    <div className='container mx-auto'>
      <div className='list'>
        <Card>
          <div className='list__body' onClick={() => alert("Detail")}>
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