import React from 'react'
import Card from '../card/Card'
import './List.sass'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const List = () => {
  const navigate = useNavigate()
  const list = useSelector(state => state.gitState.list)

  return (
    <div className='container mx-auto'>
      <div className='list'>
        {
          list ? list.map((data, i) => (
            <Card key={i}>
              <div className='list__body' onClick={() => navigate(`/detail/${data.login}`)}>
                <img
                  src={data.avatar_url}
                  className='list__image'
                />
                <span className='lits__name'>{data.login}</span>
              </div>
            </Card>
          )) : (
            <div>No Data</div>
          )
        }
      </div>
    </div>
  )
}

export default List