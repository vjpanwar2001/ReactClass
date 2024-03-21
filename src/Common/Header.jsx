import React from 'react'
import List from './List'

function Header({name,getdata}) {
  let a = 10;
  getdata(a)
  return (
   <>
  <header>
    <h1>{name.name}</h1>
    <List list={name}/>
  </header>
   </>
  )
}

export default Header