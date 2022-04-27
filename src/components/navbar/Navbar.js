import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.sass'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
      <span className='navbar__title' onClick={() => navigate("/")}>Github Finder</span>
    </div>
  )
}

export default Navbar