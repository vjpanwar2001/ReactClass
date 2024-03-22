import React from 'react'
import List from './List'
import { Link } from 'react-router-dom'

function Header({name,getdata}) {

  return (
   <>
  <header>
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/about'}>About</Link></li>
    </ul>
  </header>
   </>
  )
}

export default Header