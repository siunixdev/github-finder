import React from 'react'
import Card from '../card/Card'
import './List.sass'

const List = () => {
  return (
    <div className='container mx-auto'>
      <div className='list'>
        <Card>
          <img
            src=''
            className='h-32'
          />
          <span className='text-gray-700 text-sm'>login</span>
        </Card>
      </div>
    </div>
  )
}

export default List