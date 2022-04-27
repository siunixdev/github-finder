import React from 'react'
import './Search.sass'

const Search = () => {
  return (
    <div className='container mx-auto'>
      <div className='search'>
        <input
          className='p-3 outline-none'
          placeholder='Cari username disini'
        />
        <button
          className='p-3 bg-red-800 hover:bg-red-700 text-white px-8 w-full md:w-auto'
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Search