import React from 'react'
import './Search.sass'

const Search = () => {
  return (
    <div className='container mx-auto'>
      <div className='search'>
        <input
          className='search__input'
          placeholder='Cari username disini'
        />
        <button
          className='search__button'
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Search