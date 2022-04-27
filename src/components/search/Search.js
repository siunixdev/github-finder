import React, { useEffect, useState } from 'react'
import './Search.sass'
import { useDispatch } from 'react-redux'
import { gitAccountList } from '../../actions/git'

const Search = () => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState("")

  const getList = () => {
    dispatch(gitAccountList(keyword))
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='search'>
        <input
          className='search__input'
          placeholder='Find here'
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <button
          className='search__button'
          onClick={() => getList()}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Search